---
goal: Buat halaman Program untuk menampilkan informasi Lembaga Sertifikasi Profesi dan Bursa Kerja Khusus
version: 1.0
date_created: 2026-04-18
last_updated: 2026-04-18
owner: Development Team
status: 'Planned'
tags: `feature`, `页面`, `navigation`
---

# Introduction

![Status: Planned](https://img.shields.io/badge/status-Planned-blue)

Rencana pembuatan halaman Program untuk menampilkan informasi mengenai Programa kerja SMKN 1 Surabaya, khususnya mengenai Lembaga Sertifikasi Profesi (LSP) dan Bursa Kerja Khusus (BKK). Halaman ini diperlukan karena navigasi Program di index.html saat ini memiliki placeholder links yang perlu diimplementasikan.

## 1. Requirements & Constraints

- **REQ-001**: Halaman program.html harus menampilkan informasi mengenai Lembaga Sertifikasi Profesi (LSP)
- **REQ-002**: Halaman program.html harus menampilkan informasi mengenai Bursa Kerja Khusus (BKK)
- **REQ-003**: Navigasi di semua halaman harus diperbarui untuk mengarahkan ke program.html
- **REQ-004**: Desain harus konsisten dengan halaman lain (modul.html, berita.html)
- **CON-001**: Menggunakan struktur HTML dan CSS yang sama dengan existing pages
- **PAT-001**: Ikuti pola page-hero section seperti modul.html
- **PAT-2**: Gunakan card component (card--jurusan) untuk menampilkan program

## 2. Implementation Steps

### Implementation Phase 1 - Buat Halaman Program

- GOAL-001: Membuat halaman program.html dengan struktur dan konten yang lengkap

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-001 | Buat file program.html dengan struktur HTML lengkap (header, page-hero, content, footer) | | |
| TASK-002 | Tambahkan section untuk Lembaga Sertifikasi Profesi (LSP) dengan deskripsi dan informasi kontak | | |
| TASK-003 | Tambahkan section untuk Bursa Kerja Khusus (BKK) dengan deskripsi dan informasi lowongan | | |
| TASK-004 | Update page-hero title dan deskripsi yang sesuai | | |

### Implementation Phase 2 - Update Navigasi

- GOAL-002: Memperbarui navigasi di semua halaman untuk mengarahkan ke program.html

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-005 | Update dropdown menu Program di index.html - ubah href="#" ke program.html | | |
| TASK-006 | Update dropdown menu Program di modul.html - ubah href="#" ke program.html | | |
| TASK-007 | Update dropdown menu Program di semua halaman HTML lainnya | | |

### Implementation Phase 3 - Testing & Verifikasi

- GOAL-003: Memastikan halaman program berfungsi dengan benar

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-008 | Verifikasi halaman program.html dapat diakses dan ditampilkan dengan benar | | |
| TASK-009 | Verifikasi link navigasi Program berfungsi | | |
| TASK-010 | Verifikasi responsive design pada berbagai ukuran layar | | |

## 3. Alternatives

- **ALT-001**: Membuat dua halaman terpisah (lsp.html dan bkk.html) - Tidak dipilih karena akan memperbanyak file dan kompleksitas navigasi
- **ALT-002**: Mengintegrasikan ke dalam index.html sebagai section - Tidak dipilih karena melanggar struktur navigasi yang ada

## 4. Dependencies

- **DEP-001**: style.css (existing) - Tidak ada perubahan yang diperlukan
- **DEP-002**: script.js (existing) - Tidak ada perubahan yang diperlukan

## 5. Files

- **FILE-001**: program.html - File baru untuk halaman Program
- **FILE-002**: index.html - Update navigasi Program dropdown
- **FILE-003**: modul.html - Update navigasi Program dropdown
- **FILE-004**: berita.html - Update navigasi Program dropdown
- **FILE-005**: visi-misi.html - Update navigasi Program dropdown
- **FILE-006**: struktur-organisasi.html - Update navigasi Program dropdown
- **FILE-007**: guru-staf.html - Update navigasi Program dropdown
- **FILE-008**: sarana-prasarana.html - Update navigasi Program dropdown
- **FILE-009**: teaching-factory.html - Update navigasi Program dropdown
- **FILE-010**: galeri.html - Update navigasi Program dropdown
- **FILE-011**: akuntansi.html s/d perhotelan.html (9 files) - Update navigasi Program dropdown
- **FILE-012**: mr-iso.html - Update navigasi Program dropdown
- **FILE-013**: pengumuman.html - Update navigasi Program dropdown

## 6. Testing

- **TEST-001**: Verify halaman program.html dapat diakses via URL
- **TEST-002**: Verify semua link di dropdown Program berfungsi
- **TEST-003**: Verify page-hero menampilkan judul yang benar
- **TEST-004**: Verify section LSP dan BKK ditampilkan dengan benar
- **TEST-005**: Verify desain responsif pada mobile/tablet/desktop

## 7. Risks & Assumptions

- **RISK-001**: Semua halaman HTML harus diupdate satu per satu - dapat diatasi dengan mass replace jika pattern sama
- **ASSUMPTION-001**: style.css dan script.js sudah mendukung semua komponen yang diperlukan
- **ASSUMPTION-002**: Informasi konten untuk LSP dan BKK akan disediakan oleh user