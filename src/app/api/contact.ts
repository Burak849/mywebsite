import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/services/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        try {
            const db = await connectToDatabase();
            await db.request()
                .input('name', sql.VarChar, name)
                .input('email', sql.VarChar, email)
                .input('message', sql.Text, message)
                .query('INSERT INTO Contact (Name, Email, Message) VALUES (@name, @email, @message)');

            res.status(200).json({ message: 'Form submitted successfully!' });
        } catch (error) {
            res.status(500).json({ error: 'Database error' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
