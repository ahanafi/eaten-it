# Kriteria Submission
Fitur yang harus ada pada aplikasi: 

1. **Integration Test**
   
   Syarat:
   * Menerapkan integration test untuk fungsi menyukai dan batal menyukai restoran.

2. **End to End Test**

   Syarat:
   * Menerapkan End to End Test dengan skenario:
   * Menyukai salah satu restoran.
   * Batal menyukai restoran tersebut.

3. **Image Optimization**

   Syarat:
   * Melakukan kompresi terhadap gambar hero yang digunakan. Ukuran gambar harus di bawah 200kb.
   * Menerapkan teknik image responsive pada gambar hero. Gambar pada layar seluler dan desktop harus berbeda.
   * Menerapkan teknik lazy loading pada gambar daftar restoran yang ditampilkan.

4. **Bundle Optimization**

   Syarat:
   * Memasang bundle analyzer pada proyek submission.
   * Gunakan teknik Code Splitting untuk memisahkan vendor code dari kode asli yang Anda tuliskan.

5. **Pertahankan syarat yang ada pada submission sebelumnya**. Seperti penerapan PWA, responsibilitas tampilan,  aksesibilitas pada website dan sebagainya.

# Saran Submission
Submission Anda akan dinilai oleh reviewer dengan skala 1-5 berdasarkan dari parameter yang ada.

Anda dapat menerapkan beberapa saran di bawah ini untuk mendapatkan nilai tinggi, berikut sarannya:

* Menuliskan test case secara lengkap, mulai dari kasus positif hingga kasus negatif. Pastikan test case yang dijalankan berhasil.
* Menerapkan End to End test pada skenario lain di luar yang sudah ditentukan. Pastikan test case yang dijalankan berhasil.
  Contoh: bila aplikasi terdapat fitur customer review, lakukan End to End test pada fitur tersebut.
* Menerapkan optimasi lain di luar dari optimasi yang menjadi persyaratan. Contoh, Anda bisa menerapkan pendekatan skeleton UI, minify/uglify CSS.
* Mendeploy hasil web app yang Anda kerjakan ke third-party hosting. Seperti Firebase Hosting, Netlify, Heroku, Github Pages, atau yang lainnya. Serta, memperhatikan matrik Web Vitals dengan nilai:
  * FCP < 2.5 detik
  * FID/TBT < 100 ms
  * CLS < 0.1
  Note: Lampirkan URL dari laman web yang sudah di hosting pada Student Notes. 