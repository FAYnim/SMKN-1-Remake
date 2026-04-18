---
goal: Membuat halaman informasi (Mr.ISO dan Pengumuman) untuk menu navigasi
version: 1.0
date_created: 2026-04-18
last_updated: 2026-04-18
owner: Sisyphus
status: 'Planned'
tags: feature, frontend, html, smkn1
---

# Introduction

![Status: Planned](https://img.shields.io/badge/status-Planned-blue)

Rencana implementasi untuk membuat halaman informasi yang terdapat pada menu dropdown "Informasi" di navigasi index.html. Saat ini menu tersebut hanya berupa placeholder (#) yang perlu diimplementasikan menjadi halaman lengkap sesuai dengan struktur template yang sudah ada (`visi-misi.html`).

## 1. Requirements & Constraints

- **REQ-001**: Halaman Mr.ISO menampilkan informasi sertifikasi ISO 9001:2015 yang dimiliki sekolah
- **REQ-002**: Halaman Pengumuman menampilkan daftar pengumuman terbaru dari sekolah
- **REQ-003**: Menggunakan struktur template yang sama dengan halaman existing (`visi-misi.html`, `struktur-organisasi.html`)
- **REQ-004**: Desain responsif dan konsisten dengan tema visual website (Bricolage Grotesque + Instrument Sans)
- **REQ-005**: Navigasi aktif di header menunjukkan halaman yang sedang aktif
- **PAT-001**: Ikuti pola struktur HTML dari `visi-misi.html` (page-hero section, section-animate)
- **PAT-002**: Ikuti pola styling dari `src/css/style.css`
- **CON-001**: Semua link di navigation harus valid dan fungsional

## 2. Implementation Steps

### Implementation Phase 1

- GOAL-001: Membuat halaman Mr.ISO

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-001 | Buat file `mr-iso.html` dengan struktur template standar | | |
| TASK-002 | Implementasi page-hero section dengan judul "Mr.ISO" | | |
| TASK-003 | Tambah konten informasiISO 9001:2015 (sejarah, manfaat, cakupan) | | |
| TASK-004 | Update link navigasi di semua halaman yang memiliki menu Informasi | | |

### Implementation Phase 2

- GOAL-002: Membuat halaman Pengumuman

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-005 | Buat file `pengumuman.html` dengan struktur template standar | | |
| TASK-006 | Implementasi page-hero section dengan judul "Pengumuman" | | |
| TASK-007 | Buat grid layout untuk daftar pengumuman | | |
| TASK-008 | Tambahkan sample pengumuman (min 3 items) | | |

### Implementation Phase 3

- GOAL-003: Verifikasi dan Testing

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-009 | Verify semua link navigasi berfungsi | | |
| TASK-010 | Check responsive design di breakpoint mobile | | |
| TASK-011 | Validasi HTML dengan browser | | |

## 3. Alternatives

- **ALT-001**: Menggunakan single page dengan tabs untuk Mr.ISO dan Pengumuman - Ditolak karena tidak konsisten dengan pola halaman lain di website
- **ALT-002**: Menambahkan halaman ke navigasi Profil dropdown - Ditolak karena Informações adalah kategori terpisah sesuai wireframe asli

## 4. Dependencies

- **DEP-001**: Font Awesome 6.4.0 (sudah ada dari CDN)
- **DEP-002**: Google Fonts Bricolage Grotesque & Instrument Sans (sudah ada)
- **DEP-001**: `src/css/style.css` untuk styling
- **DEP-002**: `src/js/script.js` untuk interaksi dropdown

## 5. Files

- **FILE-001**: `mr-iso.html` - Halaman informasi sertifikasi ISO
- **FILE-002**: `pengumuman.html` - Halaman daftar pengumuman
- **FILE-003**: `index.html` - Update navigasi link ke halaman baru
- **FILE-004**: `visi-misi.html` - Update navigasi link
- **FILE-005**: `struktur-organisasi.html` - Update navigasi link
- **FILE-006**: `guru-staf.html` - Update navigasi link
- **FILE-007**: `sarana-prasaran.html` - Update navigasi link
- **FILE-008**: `teaching-factory.html` - Update navigasi link
- **FILE-009**: `galeri.html` - Update navigasi link

## 6. Testing

- **TEST-001**: Mr.ISO page load tanpa error
- **TEST-002**: Pengumuman page load tanpa error
- **TEST-003**: Link dari dropdown navigasi Mr.ISO menuju halaman yang benar
- **TEST-004**: Link dari dropdown navigasi Pengumuman menuju halaman yang benar
- **TEST-005**: Navigasi aktif highlight berfungsi di kedua halaman

## 7. Risks & Assumptions

- **RISK-001**: Konten Mr.ISO perlu disediakan oleh pihak sekolah - ASSUMPTION: Menggunakan placeholder generik dulu
- **RISK-002**: Gambar/certificate images perlu disiapkan - ASSUMPTION: Menggunakan placeholder sampai tersedia
- **ASSUMPTION-001**: Struktur CSS sudah mendukung layout yang dibutuhkan
- **ASSUMPTION-002**: Pola JavaScript di script.js sudah mendukung interaksi dropdown

## 8. Related Specifications / Further Reading

- Referensi template: `visi-misi.html`
- Style reference: `src/css/style.css`
- Navigasi referensi: `index.html` lines 63-69