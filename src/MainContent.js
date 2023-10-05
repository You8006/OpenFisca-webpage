function MainContent() {
    const contacts = [
        // 他の連絡先を追加...
        { title: '児童手当', department: 'こども家庭庁', phone: '03-6771-8030' },
        { title: '児童扶養手当', department: 'こども家庭庁', phone: '03-6771-8030' },
        { title: '特別児童扶養手当', department: 'こども家庭庁', phone: '03-6771-8030' },
        { title: '障害児福祉手当', department: '厚生労働省', phone: '03-5253-1111' },
        { title: '生活福祉資金貸付制度', department: '厚生労働省', phone: '03-5253-1111' },
    ];

    return (
        <main>
            <h2>各制度の名前と絡先</h2>
            <table>
                <thead>
                    <tr>
                        <th>制度名</th>
                        <th>部署</th>
                        <th>連絡先</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact, index) => (
                        <tr key={index}>
                            <td>{contact.title || 'N/A'}</td>
                            <td>{contact.department}</td>
                            <td>{contact.phone || 'N/A'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
}

export default MainContent;
