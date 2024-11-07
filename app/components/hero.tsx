"use client";

import foto from "../foto1.jpeg";
function Profile() {
    return (
      <img
        src={foto.src}
        alt="Putra Anjelisna Syopandi "
        className="fotoku"
      />
    );
  }

export default function Hero () {
    return (
        
                <div className="container mx-auto p-2 text-center">
                <h1 className="text-gray-400 font-bold" > CV Online</h1>
                <h1 className="text-3xl text-blue-400 font-bold">Putra Anjelisna Syopandi</h1>
                <Profile />
                 <h1 className="text-gray-400 font-bold">Saya Adalah Mahasiswa Masoem University Jurusan Komputerisasi Akuntansi Semester5 </h1> 
                </div>
    );
}