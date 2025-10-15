let huan = 1.50;
let andre = 1.80;
const crescimentoHuan = 0.02;
const crescimentoAndre = 0.03;

let ano = 0;

do {
    huan += crescimentoHuan;
    andre += crescimentoAndre;
    ano++;
    console.log(`Serão necessários ${ano} anos para que Huan fique maior que André.`);
} while (huan <= andre);
