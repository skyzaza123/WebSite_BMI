function calculateBMI(){
    // 1.รับค่าช่องกรอก
    let weight = Number(document.getElementById('weight').value)
    let height = Number(document.getElementById('height').value)
    let result = document.getElementById('result');


// 2. ครวจสอบว่ากรอกค่าถูกต้องไหม
if (weight <= 0 || height <= 0){
    result.innerHTML = 'กรุณากรอกน้ำหนักเเละส่วนสูงให้ถูกต้อง'
    result.style.color = 'red';
    return;
}

// 3.เเปลงเซนติเมตรให้เป็นเมตร คำนวน BMI = weight / (height * height)
let heightM = height / 100;
let bmi = weight / (heightM * heightM);

// 4.เเปลงตามผลเกณฑ์
let text = '';
if (bmi < 18.5){
    text = 'ผอม / นำ้หนักน้อยกว่าเกณฑ์';
} else if (bmi < 23){
    text = 'ปกติ / สมส่วน';
} else if (bmi < 25){
    text = 'ท้วม / นำ้หนักเกิน';
} else if (bmi < 30){
    text = 'อ้วนระดับ 1';
} else{
    text = 'อ้วนระดับ 2 (อ้วนมาก)';
}

// 5.เเสดงผล
result.innerHTML = 'BMI ='+ bmi.toFixed(2) +'<br>' + text;
result.style.color = "#1e3a8a";
}