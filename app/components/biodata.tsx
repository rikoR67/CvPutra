import React from 'react';

const PersonalInfo = () => {
  const personalData = {
    name: 'Putra Anjelisna Syopandi',
    birthDate: '26 Juni 2004',
    email: 'putrasyopandi3@gmail.com',
    phone: '089654796973',
    address: 'Puri Bhayangkara Elok A16 No 6',
    occupation: 'Owner',
  };

  return (
    <div className="border-2 border-indigo-500/75 rounded-1g ☐ bg-blue-800 p-2 my-5">
    <div style={styles.container}>
      <ul style={styles.list}>
        {Object.entries(personalData).map(([key, value]) => (
          <li key={key} style={styles.listItem}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

const styles = {
    container: {
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '20px',
      maxWidth: '400px',
      margin: '20px auto',
      backgroundColor: '#f9f9f9',
      fontFamily: 'Roboto, sans-serif', // Ganti font di sini
    },
    title: {
      color: 'teal',
      fontFamily: 'Roboto, sans-serif', // Ganti font judul di sini
      fontWeight: '700', // Menggunakan berat font yang lebih tebal
    },
    list: {
      listStyleType: 'none',
      padding: 0,
    },
    listItem: {
      marginBottom: '10px',
      color: 'black',
    },
  };

export default PersonalInfo;