function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  // let
  // sorted = true,
  // temp,
  // j = 0;

  // while (sorted) {
  //   sorted = false;
  //   j++;

  //   for (let i = 0; i < result.length - j; i++) {
  //     // Perbandingan Nilai
  //     if (result[i].year > result[i + 1].year) {
  //       temp = result[i];
  //       result[i] = result[i + 1];
  //       result[i + 1] = temp;
  //       sorted = true;
  //     }
  //   }
  // }

  let temp;

  // Urut index kedepan
  for (let i = 1; i < result.length; i++) {
    let j = i;

    // Mengecek kebelakang
    while (j > 0 && result[j - 1].year > result[j].year) {
      temp = result[j - 1];
      result[j - 1] = result[j];
      result[j] = temp;
      j--;
    }
  }

  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}