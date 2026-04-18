---
goal: Create individual pages for all 9 majors in SMKN 1 Surabaya navigation
version: 1.0
date_created: 2026-04-18
last_updated: 
owner: 
status: 'Planned'
tags: `feature`, `frontend`, `html`, `navigation`
---

# Introduction

![Status: Planned](https://img.shields.io/badge/status-Planned-blue)

Rencana pembuatan halaman individual untuk setiap program keahlian (jurusan) yang terdapat di dropdown menu "Jurusan" pada header website SMKN 1 Surabaya. Saat ini semua link menggunakan href="#" yang belum menujuk ke halaman manapun.

## 1. Requirements & Constraints

- **REQ-001**: Buat 9 halaman HTML baru untuk setiap kompetensi keahlian
- **REQ-002**: Setiap halaman harus memiliki struktur konsisten seperti visi-misi.html (page-hero section + content)
- **REQ-003**: Update navigation links di index.html dan semua halaman untuk point ke halaman baru
- **REQ-004**: Setiap halaman mencakup: deskripsijurusan,kompetensi,loker prospek,konten unik
- **PAT-001**: Ikuti pattern struktur HTML dari visi-misi.html yang sudah ada
- **PAT-002**: Gunakan CSS yang sama (src/css/style.css)
- **PAT-003**: Gunakan FontAwesome icons untuk iconography
- **CON-001**: 9 halaman harus selesai dalam satu fase

## 2. Implementation Steps

### Implementation Phase 1 - Create pages

- GOAL-001: Membuat 9 halaman HTML baru untuk setiap program keahlian

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-001 | Create akuntansi.html - halaman untuk Akuntansi | | |
| TASK-002 | Create bisnis-daring.html - halaman untuk Bisnis Daring dan Pemasaran | | |
| TASK-003 | Create manajemen-perkantoran.html - halaman untuk Manajemen Perkantoran | | |
| TASK-004 | Create manajemen-logistik.html - halaman untuk Manajemen Logistik | | |
| TASK-005 | Create rpl.html - halaman untuk Rekayasa Perangkat Lunak | | |
| TASK-006 | Create tkj.html - halaman untuk Teknik Komputer dan Jaringan | | |
| TASK-007 | Create dkv.html - halaman untuk Desain Komunikasi Visual | | |
| TASK-008 | Create psp.html - halaman untuk Produksi Siaran Program Pertelevisian | | |
| TASK-009 | Create perhotelan.html - halaman untuk Perhotelan | | |

### Implementation Phase 2 - Update Navigation

- GOAL-002: Memperbarui semua link dropdown Jurusan di setiap halaman

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-010 | Update index.html header dropdown links | | |
| TASK-011 | Update visi-misi.html header dropdown links | | |
| TASK-012 | Update struktur-organisasi.html header dropdown links | | |
| TASK-013 | Update guru-staf.html header dropdown links | | |
| TASK-014 | Update sarana-prasaranal.html header dropdown links | | |
| TASK-015 | Update teaching-factory.html header dropdown links | | |
| TASK-016 | Update galeri.html header dropdown links | | |

### Implementation Phase 3 - Validation

- GOAL-003: Memastikan semua halaman dapat diakses dan valid

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-017 | Verify HTML syntax semua halaman baru | | |
| TASK-018 | Verify navigation bekerja dengan benar | | |
| TASK-019 | Verify semua link tidak # | | |

## 3. Alternatives

- **ALT-001**: Membuat satu halaman dinamis dengan query params (contoh: Jurusan.html?jurusan=rpl) - Ditolak karena tidak sesuai dengan pola existing pages di project
- **ALT-002**: Menggunakan include/partial untuk header - Ditolak karena website ini statis HTML

## 4. Dependencies

- **DEP-001**: src/css/style.css - harus support styling baru jika diperlukan
- **DEP-002**: src/js/script.js - mungkin perlu update untuk dropdown behavior
- FontAwesome CDN - sudah digunakan di project
- Google Fonts - sudah digunakan di project

## 5. Files

- **FILE-001**: akuntansi.html - Halaman program keahlian Akuntansi
- **FILE-002**: bisnis-daring.html - Halaman program keahlian Bisnis Daring dan Pemasaran
- **FILE-003**: manajemen-perkantoran.html - Halaman program keahlian Manajemen Perkantoran
- **FILE-004**: manajemen-logistik.html - Halaman program keahlian Manajemen Logistik
- **FILE-005**: rpl.html - Halaman program keahlian Rekayasa Perangkat Lunak
- **FILE-006**: tkj.html - Halaman program keahlian Teknik Komputer dan Jaringan
- **FILE-007**: dkv.html - Halaman program keahlian Desain Komunikasi Visual
- **FILE-008**: psp.html - Halaman program keahlian Produksi Siaran Program Pertelevisian
- **FILE-009**: perhotelan.html - Halaman program keahlian Perhotelan
- **FILE-010**: index.html (update navigation)
- **FILE-011**: visi-misi.html (update navigation)
- **FILE-012**: struktur-organisasi.html (update navigation)
- **FILE-013**: guru-staf.html (update navigation)
- **FILE-014**: sarana-prasaranal.html (update navigation)
- **FILE-015**: teaching-factory.html (update navigation)
- **FILE-016**: galeri.html (update navigation)

## 6. Testing

- **TEST-001**: Klik setiap link di dropdown Jurusan dan pastikan kehalaman yang benar
- **TEST-002**: Verify breadcrumb menunjukkan halaman yang tepat
- **TEST-003**: Verify page title sesuai dengan nama Jurusan
- **TEST-004**: Verify back link ke home berfungsi

## 7. Risks & Assumptions

- **RISK-001**: Jika adaJurusan baru Ditambahkan, harus buat halaman baru juga - manageable dengan update plan
- **RISK-002**: CSS styling mungkin perlu penyesuaian per halaman - test after implementation
- **ASSUMPTION-001**: Pola page existing sudah baik dan bisa diikuti
- **ASSUMPTION-002**: FontAwesome icons yang sesuai tersedia untuk setiap Jurusan

## 8. Related Specifications / Further Reading

- [index.html](index.html) - Reference untuk page structure
- [visi-misi.html](visi-misi.html) - Reference untuk page-hero pattern
- [style.css](src/css/style.css) - Styling reference
- [script.js](src/js/script.js) - JavaScript reference