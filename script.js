function matching(match) {
    return {
        1: "are Friends",
        2: "are Lovers",
        3: "have Affection for each other",
        4: "will get Marry soon",
        5: "are Enemies",
        6: "are Secret Lover",
        7: "are Siblings"
    }[match];
};

var input = document.querySelectorAll("#input input");
var checkKar = document.querySelector("#check-kr");
var secret = document.querySelector("#secret");
var tryAgain = document.querySelector("#tryAgain")
tryAgain.style.display = "none"
var arr = [];

checkKar.addEventListener("click", function () {
    if (document.querySelector("#yn").value == "yhfth" || document.querySelector("#cn").value == "ehfeh") {
        console.error("check kar");
    }
    else {
    var randomTym = Math.floor(Math.random() * (7000 - 1000));

    var yr = document.querySelector("#yn").value;
    var cn = document.querySelector("#cn").value;
    var yrCn = yr + cn;
    var yrCnArr = [...yrCn].sort();
    var rptAlpha = [];

    for (let i = 0; i < yrCnArr.length - 1; i++) {
        if (yrCnArr[i] === yrCnArr[i + 1]) {
            rptAlpha.push(yrCnArr[i]);
        }
    };
    var rptAlphaArr = [...new Set(rptAlpha)];
    // clear previous array
    arr = [];
    for (let i = 0; i < yrCn.length; i++) {
        arr.push(yrCn.charAt(i));

        for (let i = 0; i < rptAlphaArr.length; i++) {
            arr = arr.filter(e => e !== rptAlphaArr[i]);

        };
    };

    var finalNameLen = arr.join("").toString().length;
    secret.style.opacity = 1;
    checkKar.querySelector("span").style.display = "none";
    checkKar.querySelector("#img").style.display = "block";
    document.querySelector("#tryAgain").style.display = "none";

    if (finalNameLen > 7) {
        remainingLen = finalNameLen - 7;
        setTimeout(() => {
            document.querySelector("#tryAgain").style.display = "block";
            checkKar.querySelector("#img").style.display = "none";
            secret.style.opacity = 1;
            secret.style.transform = `translateY(0%)`;
            secret.innerHTML = `${yr} and  ${cn} ${matching(remainingLen)}`

            tryAgain.style.display = "block"
            checkKar.style.display = "none"
        }, randomTym);
    }
    else {
        setTimeout(() => {
            document.querySelector("#tryAgain").style.display = "block";
            checkKar.querySelector("#img").style.display = "none";
            // secret.style.opacity = 1;
            secret.style.transform = `translateY(0%)`;
            secret.innerHTML = `${yr} and  ${cn} ${matching(finalNameLen)}`

            tryAgain.style.display = "block"
            checkKar.style.display = "none"
        }, randomTym);
    };
    }
});

tryAgain.addEventListener("click", function () {
    location.reload()
})