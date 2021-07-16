# Test Case
---
## Integration Testing
### Menyukai Restoran
1. Resto belum disukai.
2. Widget untuk menyukai resto ditampilkan.
3. Widget menyukai resto ditekan oleh pengguna.
4. Resto ditambahkan ke daftar resto yang disukai:
   - Ternyata resto sudah disukai:
     - Tidak perlu menyimpan kembali.
   - Data resto tidak memiliki ID:
     - Sistem tidak memproses penyimpanan.
     - SIstem tidak gagal.

### Batal Menyukai Restoran
1. Resto sudah disukai.
2. Widget untuk batal menyukai resto ditampilkan.
3. Widget pembatalan ditekan oleh pengguna.
4. Resto dihapus dari daftar resto yang disukai:
   - Ternyata resto tidak ada dalam daftar resto yang disukai.

## End to End Test

### Skenario Menyukai Resto
1. Buka halaman utama.
2. Pilih salah satu resto, dalam kasus ini resto pertama.
3. Klik nama resto-nya.
4. Aplikasi mengalihkan ke halaman detail resto.
5. Tekan tombol favorite.
6. Alihkan ke halaman favorite.
7. Kita melihat resto yang telah difavoritkan.

### Skenario Batal Menyukai Resto
1. Buka halaman favorite.
2. Pilih salah satu resto yang telah disukai, dalam kasus ini resto pertama.
3. Klik nama resto-nya.
4. Aplikasi mengalihkan ke halaman detail resto.
5. Tekan tombol un-favorite.
6. Alihkan ke halaman favorite.
7. Kita melihat teks dengan keterangan tidak ada resto yang difavoritkan.

### Skenario Menambahkan Review Resto
1. Buka halaman utama.
2. Pilih salah satu resto yang telah disukai, dalam kasus ini resto yang terakhir.
3. Klik nama resto-nya.
4. Aplikasi mengalihkan ke halaman detail resto.
5. Isi form input nama reviewer.
6. Isi form textarea keterangan review-nya.
7. Klik tombol submit review.
8. Muncul popup sweetalert.
9. Klik tombol OK (konfirmasi).
10. Pastikan di data reviews paling terakhir sudah ada data review yang telah ditambahkan.