// File: questions.js
const nganHangCauHoi = {
    "Toan": [
        {
            baiHoc: "Phép cộng qua 10",
            cauHoi: "Bạn Dũng có 15 quyển truyện, mẹ mua thêm cho Dũng 8 quyển nữa. Hỏi Dũng có tất cả bao nhiêu quyển truyện? 📚",
            dapAn: ["21", "22", "23", "24"],
            dapAnDung: "23",
            giaiThich: "Ta lấy 15 + 8 = 23 quyển truyện nhé! Con tính rất giỏi."
        },
        {
            baiHoc: "Phép trừ có nhớ",
            cauHoi: "Anh Huy có 32 viên bi. Anh Huy cho Khang 15 viên. Hỏi anh Huy còn lại bao nhiêu viên bi? 🔴",
            dapAn: ["16", "17", "18", "19"],
            dapAnDung: "17",
            giaiThich: "Ta đặt tính: 32 - 15 = 17 viên bi."
        },
        {
            baiHoc: "Bảng nhân 2",
            cauHoi: "Mỗi con gà có 2 cái chân. Hỏi 5 con gà có tất cả bao nhiêu cái chân? 🐔",
            dapAn: ["8 cái", "10 cái", "12 cái", "7 cái"],
            dapAnDung: "10 cái",
            giaiThich: "Mỗi con có 2 chân, 5 con thì ta lấy: 2 x 5 = 10 cái chân."
        },
        {
            baiHoc: "Xem đồng hồ",
            cauHoi: "Kim dài chỉ số 12, kim ngắn chỉ số 8. Vậy đồng hồ đang chỉ mấy giờ? ⏰",
            dapAn: ["12 giờ", "8 giờ", "4 giờ", "20 giờ"],
            dapAnDung: "8 giờ",
            giaiThich: "Kim ngắn chỉ giờ (chỉ số 8), kim dài chỉ phút (chỉ số 12) là đúng 8 giờ."
        },
        {
            baiHoc: "Đơn vị đo độ dài",
            cauHoi: "1 đề-xi-mét (dm) bằng bao nhiêu xăng-ti-mét (cm)? 📏",
            dapAn: ["10 cm", "100 cm", "1 cm", "20 cm"],
            dapAnDung: "10 cm",
            giaiThich: "Ghi nhớ nhé: 1 dm = 10 cm."
        },
        {
            baiHoc: "Hình học",
            cauHoi: "Hình nào dưới đây có 4 cạnh và 4 góc? 🔲",
            dapAn: ["Hình tam giác", "Hình tròn", "Hình tứ giác", "Khối cầu"],
            dapAnDung: "Hình tứ giác",
            giaiThich: "'Tứ' nghĩa là 4, nên hình tứ giác là hình có 4 cạnh và 4 góc."
        },
        {
            baiHoc: "Số liền trước, liền sau",
            cauHoi: "Số liền trước của số lớn nhất có 2 chữ số là số nào? 🔢",
            dapAn: ["98", "99", "100", "97"],
            dapAnDung: "98",
            giaiThich: "Số lớn nhất có 2 chữ số là 99. Số liền trước của 99 là 98."
        },
        {
            baiHoc: "Giải toán nhiều bước",
            cauHoi: "Sáng nay Dũng tập thể dục được 20 phút, Khang tập nhiều hơn Dũng 10 phút. Hỏi Khang tập thể dục trong bao lâu? 🏃‍♂️",
            dapAn: ["10 phút", "20 phút", "30 phút", "40 phút"],
            dapAnDung: "30 phút",
            giaiThich: "Khang tập nhiều hơn nên ta làm phép cộng: 20 + 10 = 30 phút."
        }
    ],

    "TiengViet": [
        {
            baiHoc: "Từ chỉ sự vật",
            cauHoi: "Từ nào dưới đây là từ chỉ đồ dùng học tập của con? 🎒",
            dapAn: ["Múa hát", "Cái cặp", "Xanh biếc", "Vui vẻ"],
            dapAnDung: "Cái cặp",
            giaiThich: "Cái cặp là đồ vật con dùng để đựng sách vở đi học hằng ngày."
        },
        {
            baiHoc: "Câu kiểu Ai là gì?",
            cauHoi: "Câu nào dưới đây giới thiệu về người thân của con? 👨‍👩‍👦",
            dapAn: ["Bố em đang đọc báo", "Bố em rất cao lớn", "Bố em là kỹ sư", "Bố chở em đi học"],
            dapAnDung: "Bố em là kỹ sư",
            giaiThich: "Câu dùng từ 'là' để giới thiệu nghề nghiệp hoặc thân phận theo mẫu Ai là gì."
        },
        {
            baiHoc: "Từ trái nghĩa",
            cauHoi: "Từ trái nghĩa với từ 'chăm chỉ' là từ nào? 🐢",
            dapAn: ["Siêng năng", "Lười biếng", "Cần cù", "Nhanh nhẹn"],
            dapAnDung: "Lười biếng",
            giaiThich: "Trái ngược với việc chăm chỉ học hành là tính lười biếng. Chúng ta không nên lười biếng nhé!"
        },
        {
            baiHoc: "Chính tả (tr/ch)",
            cauHoi: "Điền chữ (tr/ch) thích hợp vào chỗ trống: 'Bức ...anh' 🎨",
            dapAn: ["tr", "ch", "s", "x"],
            dapAnDung: "tr",
            giaiThich: "Chữ đúng chính tả là 'Bức tranh'."
        },
        {
            baiHoc: "Câu kiểu Ai làm gì?",
            cauHoi: "Bộ phận nào trả lời cho câu hỏi 'Làm gì?' trong câu: 'Đàn chim đang hót líu lo.'? 🐦",
            dapAn: ["Đàn chim", "đang hót", "hót líu lo", "đang hót líu lo"],
            dapAnDung: "đang hót líu lo",
            giaiThich: "'đang hót líu lo' là cụm từ chỉ hoạt động của đàn chim."
        },
        {
            baiHoc: "Từ chỉ đặc điểm",
            cauHoi: "Từ nào dưới đây chỉ đặc điểm của quả chanh? 🍋",
            dapAn: ["Chua chát", "Ngọt ngào", "Cay xè", "Đắng ngắt"],
            dapAnDung: "Chua chát",
            giaiThich: "Quả chanh thường có vị chua đặc trưng."
        },
        {
            baiHoc: "Câu hỏi Ở đâu?",
            cauHoi: "Trong câu: 'Những chú cá đang bơi lội tung tăng dưới ao.', từ nào trả lời câu hỏi 'Ở đâu?' 🐟",
            dapAn: ["Những chú cá", "đang bơi lội", "tung tăng", "dưới ao"],
            dapAnDung: "dưới ao",
            giaiThich: "'dưới ao' là từ chỉ địa điểm, nơi chốn."
        },
        {
            baiHoc: "Từ đồng nghĩa",
            cauHoi: "Từ nào có nghĩa giống với từ 'To lớn'? 🐘",
            dapAn: ["Nhỏ bé", "Khổng lồ", "Thấp lùn", "Mảnh mai"],
            dapAnDung: "Khổng lồ",
            giaiThich: "Khổng lồ là từ chỉ sự vật rất to lớn."
        }
    ],

    "DoVui": [
        {
            baiHoc: "Thế giới động vật",
            cauHoi: "Con gì đuôi ngắn tai dài, mắt hồng lông mượt có tài chạy nhanh? 🐇",
            dapAn: ["Con thỏ", "Con chuột", "Con chó", "Con mèo"],
            dapAnDung: "Con thỏ",
            giaiThich: "Chính là bạn Thỏ với đôi tai dài đáng yêu."
        },
        {
            baiHoc: "Khám phá tự nhiên",
            cauHoi: "Cầu gì không bắc qua sông, mà vắt ngang trời lúc trời vừa mưa xong? 🌈",
            dapAn: ["Cầu vượt", "Cầu vồng", "Cầu khỉ", "Cầu treo"],
            dapAnDung: "Cầu vồng",
            giaiThich: "Cầu vồng rực rỡ 7 sắc màu thường xuất hiện sau cơn mưa lớn."
        },
        {
            baiHoc: "Đồ vật quanh ta",
            cauHoi: "Cái gì bật sáng trong đêm, giúp cho nhà cửa tối đen sáng bừng? 💡",
            dapAn: ["Mặt trời", "Cái quạt", "Bóng đèn", "Cái ti vi"],
            dapAnDung: "Bóng đèn",
            giaiThich: "Đó chính là bóng đèn điện chiếu sáng hằng ngày."
        },
        {
            baiHoc: "Thế giới thực vật",
            cauHoi: "Quả gì ruột đỏ, vỏ xanh, hạt đen ran rát, ngọt lành ăn ngon? 🍉",
            dapAn: ["Quả bưởi", "Quả cam", "Quả thanh long", "Quả dưa hấu"],
            dapAnDung: "Quả dưa hấu",
            giaiThich: "Dưa hấu mát lạnh, giải nhiệt mùa hè rất tuyệt!"
        },
        {
            baiHoc: "Phương tiện giao thông",
            cauHoi: "Xe gì hai bánh, đạp chạy bon bon, chuông kêu kính coong, đứng yên thì đổ? 🚲",
            dapAn: ["Xe máy", "Xe xích lô", "Xe đạp", "Xe ô tô"],
            dapAnDung: "Xe đạp",
            giaiThich: "Đó là chiếc xe đạp, cần có người giữ thăng bằng hoặc gạt chân chống thì mới đứng được."
        }
    ]
};
