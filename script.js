// Data kelulusan siswa
const dataKelulusan = [
  { nama: 'Raga', nisn: '1234567890', status: 'LULUS' },
  { nama: 'Varen', nisn: '0987654321', status: 'TIDAK LULUS' }
  // Tambah data siswa lain di sini
];

// Variabel untuk menyimpan data siswa yang sedang dicek
let currentData = null;

// Fungsi untuk cek kelulusan
function cekKelulusan() {
  // Ambil input dari form
  const nama = document.getElementById('nama').value.trim();
  const nisn = document.getElementById('nisn').value.trim();

  // Validasi input kosong
  if (!nama || !nisn) {
    alert('Nama dan NISN harus diisi!');
    return;
  }

  // Cari data siswa
  const data = dataKelulusan.find(d => 
    d.nama.toLowerCase() === nama.toLowerCase() && 
    d.nisn === nisn
  );

  // Jika data tidak ditemukan
  if (!data) {
    alert('Data tidak ditemukan. Periksa kembali Nama dan NISN Anda.');
    return;
  }

  // Simpan data yang ditemukan
  currentData = data;

  // Pindah ke layar amplop
  document.getElementById('formScreen').style.display = 'none';
  document.getElementById('amplopScreen').style.display = 'flex';
}

// Fungsi untuk buka amplop
function bukaAmplop() {
  const envelope = document.querySelector('.envelope');
  envelope.classList.add('open');

  setTimeout(() => {
    document.getElementById('amplopScreen').style.display = 'none';
    document.getElementById('suratScreen').style.display = 'flex';

    // Isi data
    document.getElementById('sNama').innerText = currentData.nama;
    document.getElementById('sNisn').innerText = currentData.nisn;

    // Elemen status
    const statusElement = document.getElementById('sStatus');
    
    // Tentukan teks dan class berdasarkan status
    if (currentData.status === 'LULUS') {
      statusElement.innerText = 'Berdasarkan hasil rapat dewan guru, peserta didik tersebut dinyatakan LULUS dan diterima di SMAN 8 Nusa Arutala.';
      statusElement.className = 'status-text status-lulus';  // ← Tambah class biru
    } else {
      statusElement.innerText = 'Berdasarkan hasil rapat dewan guru, peserta didik tersebut dinyatakan TIDAK LULUS seleksi penerimaan.';
      statusElement.className = 'status-text status-tidak-lulus';  // ← Tambah class merah
    }
  }, 1000);
}

// Fungsi untuk kembali ke form
function kembali() {
  // Reset semua layar
  document.getElementById('suratScreen').style.display = 'none';
  document.getElementById('amplopScreen').style.display = 'none';
  document.getElementById('formScreen').style.display = 'flex';
  
  // Reset amplop
  document.querySelector('.envelope').classList.remove('open');
  
  // Reset form
  document.getElementById('nama').value = '';
  document.getElementById('nisn').value = '';
}