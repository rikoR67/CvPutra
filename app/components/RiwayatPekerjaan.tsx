function RowPekerjaan (props:any) {
    return (
      <div className="border-2 border-indigo-500/75 rounded-1g ☐ bg-green-800 p-2 my-5">
      <div className="container mx-auto ">
      <div className="grid grid-cols-12 gap-1">
      <div className="col-span-12 md:col-span-4 ">{props.Sebagai}</div> 
        <div className="col-span-12 md:col-span-4 ">{props.instansi}</div>
      <div className="col-span-12 md:col-span-4 ">{props.tahun}</div>
      </div>
      </div>
      </div>
      );
  }
  export default function  RiwayatPekerjaan() {
    return (
        <div className="container mx-auto p-2 text-center pt-20">
<h2 className="text-2x1">Riwayat Pekerjaan</h2>
<RowPekerjaan Sebagai="Magang PPL" instansi="Apotek Al Ma'Soem" tahun="2023" />
<RowPekerjaan Sebagai="Magang PAL" instansi="Bazzpack Official" tahun="2024" />


</div>
);
}