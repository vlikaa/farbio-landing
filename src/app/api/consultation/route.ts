import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
	try {
		const { name, surname, email, phone, description } = await request.json();

		const { data, error } = await resend.emails.send({
			from: `Заявки с сайта <${process.env.RESEND_FROM_EMAIL}>`,
			to: [process.env.ADMIN_EMAIL!],
			subject: `📥 Новая заявка на консультацию: ${name} ${surname}`,
			html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #006D35; margin-bottom: 24px;">
            📋 Новая заявка на консультацию
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #475569; margin-top: 0;">👤 Информация о клиенте</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #64748b;"><strong>Имя:</strong></td>
                <td style="padding: 8px 0; color: #1e293b; font-weight: 500;">${name}</td>
              </tr>
              
              <tr>
                <td style="padding: 8px 0; color: #64748b;"><strong>Фамилия:</strong></td>
                <td style="padding: 8px 0; color: #1e293b; font-weight: 500;">${surname}</td>
              </tr>
              
              <tr>
                <td style="padding: 8px 0; color: #64748b;"><strong>Телефон:</strong></td>
                <td style="padding: 8px 0; color: #1e293b; font-weight: 500;">
                  <a href="tel:${phone}" style="color: #006D35; text-decoration: none; font-weight: 500;">
                    ${phone}
                  </a>
                </td>
              </tr>
              
              <tr>
                <td style="padding: 8px 0; color: #64748b;"><strong>Email:</strong></td>
                <td style="padding: 8px 0; color: #1e293b; font-weight: 500;">
                  <a href="mailto:${email}" style="color: #006D35; text-decoration: none; font-weight: 500;">
                    ${email}
                  </a>
                </td>
              </tr>
            </table>
          </div>
          
          ${description ? `
          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #00D366;">
            <h3 style="color: #0369a1; margin-top: 0;">💬 Описание задачи</h3>
            <p style="color: #1e293b; line-height: 1.6; white-space: pre-wrap;">${description}</p>
          </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
            <p>📅 Дата: ${new Date().toLocaleDateString('ru-RU')}</p>
            <p>⏰ Время: ${new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}</p>
            <p>🔗 Отправлено с формы консультации</p>
          </div>
        </div>
      `,
			text: `
НОВАЯ ЗАЯВКА НА КОНСУЛЬТАЦИЮ

👤 Имя: ${name}
👤 Фамилия: ${surname}
📞 Телефон: ${phone}
📧 Email: ${email}

${description ? `💬 Описание задачи:
${description}
` : ''}

📅 Дата: ${new Date().toLocaleDateString('ru-RU')}
⏰ Время: ${new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}
🔗 Отправлено с формы консультации
      `,
		});

		if (error) {
			console.error('Resend error:', error);
			return NextResponse.json(
				{ error: 'Ошибка при отправке заявки' },
				{ status: 500 }
			);
		}

		if (email) {
			await resend.emails.send({
				from: `Консультации <${process.env.RESEND_FROM_EMAIL}>`,
				to: [email],
				subject: `✅ Ваша заявка принята, ${name}!`,
				html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <div style="background: #00D366; color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 24px;">
                ✓
              </div>
              <h1 style="color: #006D35; margin-bottom: 10px;">
                Спасибо за вашу заявку, ${name}!
              </h1>
              <p style="color: #475569; font-size: 16px;">
                Мы получили ваши данные и скоро свяжемся с вами для консультации.
              </p>
            </div>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #475569; margin-top: 0;">📋 Ваша заявка</h3>
              <p><strong>Имя:</strong> ${name} ${surname}</p>
              <p><strong>Телефон:</strong> ${phone}</p>
              <p><strong>Email:</strong> ${email}</p>
              ${description ? `<p><strong>Описание:</strong> ${description}</p>` : ''}
            </div>
            
            <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
              <p style="color: #0369a1; margin: 0; font-size: 14px;">
                ⏳ Ожидайте звонка в течение 24 часов в рабочее время.
              </p>
            </div>
            
            <p style="color: #64748b; font-size: 14px; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 20px;">
              С уважением,<br>
              Команда [Ваша компания]
            </p>
          </div>
        `,
			});
		}

		return NextResponse.json(
			{ success: true, message: 'Заявка отправлена успешно!' },
			{ status: 200 }
		);

	} catch (error) {
		console.error('Server error:', error);
		return NextResponse.json(
			{ error: 'Внутренняя ошибка сервера' },
			{ status: 500 }
		);
	}
}