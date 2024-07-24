function bubbleSort(arr) {
  let n = arr.length;
  // گرفتن طول آرایه
  for (let i = 0; i < n - 1; i++) {
    // حلقه بیرونی برای تکرار کل فرآیند
    for (let j = 0; j < n - i - 1; j++) {
      // حلقه داخلی برای جابجایی عناصر
      if (arr[j] > arr[j + 1]) {
        // اگه عنصر فعلی بزرگتر از عنصر بعدی بود، جاشون رو عوض کن
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// مثال
let array = [64, 34, 25, 12, 22, 11, 90];
console.log("آرایه مرتب شده:", bubbleSort(array));