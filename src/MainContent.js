// src/MainContent.js
import React from 'react';
import './styles.css';

function MainContent() {
    const contacts = [
        { department: '保健福祉部', phone: '0123-456-789' },
        { department: '市民局', phone: '987-654-321' },
        // 他の連絡先を追加...
    ];

    return (
        <main>
            <h2>各行政の相談窓口</h2>
            <table>
                <thead>
                    <tr>
                        <th>部署</th>
                        <th>連絡先</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact, index) => (
                        <tr key={index}>
                            <td>{contact.department}</td>
                            <td>{contact.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
}

export default MainContent;
