function redirect(){
    window.location.href = "tarot_destino.html";
}

document.addEventListener('DOMContentLoaded', function() {
    // Check if the current path is for this file
    if (/tarot_destino.html/.test(window.location.pathname)) {
        tarot_destiny();
    }
});

function validate(){
    var name = form.name.value;
    var email = form.email.value;

    if(name.length <= 4){
        alert("Insira o seu nome inteiro");
        form.name.focus();
        return false;
    }
}

// signs
var sign_definitions = {
    "aries" : "Energético e destemido, com uma natureza impulsiva e uma paixão por liderar e enfrentar novos desafios.",
    "taurus" : "Estável e paciente, valorizando segurança e conforto. São persistentes e leais, apreciando as coisas boas da vida.",
    "gemini" : "Curioso e versátil, adorando aprender e comunicar. São adaptáveis e sociáveis, sempre buscando novidades.",
    "cancer" : "Censível e intuitivo, com um forte apego ao lar e à família. São protetores e empáticos, buscando segurança emocional.",
    "leo" : "Confiante e criativo, adorando ser o centro das atenções. São generosos e líderes naturais, com energia vibrante.",
    "virgo" : "Meticuloso e prático, com atenção aos detalhes. São analíticos e trabalhadores, buscando sempre a perfeição.",
    "libra" : "Busca equilíbrio e harmonia, sendo diplomático e justo. São sociáveis e cooperativos, apreciando a beleza e a paz.",
    "scorpio" : "Intenso e apaixonado, com uma natureza misteriosa. São determinados e intuitivos, buscando profundidade e verdade.",
    "sagittarius" : "Otimista e aventureiro, amando a liberdade. São exploradores francos, buscando novas experiências e conhecimentos.",
    "capricorn" : "Ambicioso e disciplinado, focado em alcançar seus objetivos. São responsáveis e práticos, superando obstáculos com paciência.",
    "aquarius" : "Original e independente, com uma visão de futuro. São inovadores e humanitários, lutando por mudanças progressivas.",
    "pisces" : "Compassivo e imaginativo, profundamente sensível e intuitivo. São artísticos e idealistas, buscando um sentido maior na vida."
}

var sign_descriptions = {
    "aries" : "Áries é um signo de fogo conhecido por sua energia, entusiasmo e natureza destemida. Os arianos são líderes naturais, sempre prontos para enfrentar novos desafios. Eles são impulsivos e gostam de tomar a iniciativa, muitas vezes preferindo agir primeiro e pensar depois. A coragem e a determinação são suas marcas registradas, tornando-os pioneiros em muitas áreas de suas vidas.",
    "taurus" : "Touro é um signo de terra conhecido por sua estabilidade, paciência e praticidade. Taurinos valorizam a segurança e o conforto, e tendem a ser teimosos e persistentes. Eles são leais e dedicados, tanto em suas relações pessoais quanto em seus objetivos. Apreciam as coisas boas da vida e buscam prazer em experiências sensoriais, como boa comida e conforto.",
    "gemini" : "Gêmeos é um signo de ar conhecido por sua curiosidade, versatilidade e capacidade de comunicação. Geminianos são adaptáveis e gostam de aprender novas coisas, muitas vezes buscando variedade e novidade em suas vidas. Eles são sociáveis e adoram conversar, tornando-os bons em se conectar com os outros e em transmitir informações.",
    "cancer" : "Câncer é um signo de água conhecido por sua sensibilidade, intuição e natureza protetora. Cancerianos são profundamente ligados ao lar e à família, e têm uma forte necessidade de segurança emocional. Eles são empáticos e cuidadores, muitas vezes colocando as necessidades dos outros à frente das suas próprias. Sua intuição é afiada, permitindo-lhes compreender os sentimentos alheios com facilidade.",
    "leo" : "Leão é um signo de fogo conhecido por sua confiança, criatividade e generosidade. Leoninos adoram estar no centro das atenções e têm um forte senso de autovalor. Eles são líderes naturais e têm um espírito magnânimo, sempre prontos para ajudar os outros. Sua energia vibrante e entusiasmo são contagiosos, fazendo com que se destaquem em qualquer ambiente.",
    "virgo" : "Virgem é um signo de terra conhecido por sua atenção aos detalhes, praticidade e natureza analítica. Virginianos são meticulosos e têm um forte desejo de perfeição, o que os torna excelentes em resolver problemas e organizar informações. Eles são trabalhadores e dedicados, buscando sempre melhorar e otimizar as coisas ao seu redor.",
    "libra" : "Libra é um signo de ar conhecido por sua busca por equilíbrio, harmonia e justiça. Librianos são diplomáticos e têm um forte senso de estética, apreciando a beleza em todas as suas formas. Eles são sociáveis e cooperativos, sempre buscando evitar conflitos e manter a paz. Sua habilidade em ver ambos os lados de uma situação os torna excelentes mediadores.",
    "scorpio" : "Escorpião é um signo de água conhecido por sua intensidade, paixão e natureza misteriosa. Escorpianos são determinados e persistentes, muitas vezes buscando profundidade e transformação em suas vidas. Eles têm uma forte intuição e são excelentes em descobrir verdades ocultas. Sua lealdade é profunda, e esperam o mesmo nível de comprometimento dos outros.",
    "sagittarius" : "Sagitário é um signo de fogo conhecido por seu otimismo, espírito aventureiro e amor pela liberdade. Sagitarianos são exploradores naturais, sempre em busca de novas experiências e conhecimentos. Eles são francos e têm uma abordagem direta da vida, apreciando a honestidade e a justiça. Sua natureza expansiva os leva a buscar grandes horizontes e desafios.",
    "capricorn" : "Capricórnio é um signo de terra conhecido por sua ambição, disciplina e responsabilidade. Capricornianos são trabalhadores e determinados, sempre focados em alcançar seus objetivos. Eles valorizam a estrutura e a ordem, e são excelentes em planejar e organizar suas vidas. Sua abordagem prática e paciente os ajuda a superar obstáculos e alcançar o sucesso.",
    "aquarius" : "Aquário é um signo de ar conhecido por sua originalidade, independência e visão de futuro. Aquarianos são inovadores e têm um forte desejo de fazer a diferença no mundo. Eles são intelectuais e apreciam a liberdade de pensamento e expressão. Sua natureza humanitária os leva a se envolver em causas sociais e a lutar por mudanças progressivas.",
    "pisces" : "Peixes é um signo de água conhecido por sua compaixão, imaginação e sensibilidade. Piscianos são empáticos e muitas vezes absorvem os sentimentos dos outros, tornando-os profundamente intuitivos. Eles têm uma natureza artística e criativa, apreciando as artes e a música. Sua conexão com o mundo espiritual os torna sonhadores e muitas vezes idealistas, buscando sempre um sentido maior na vida."
}
var sign_translation = {
    "aries" : "áries",
    "taurus" : "touro",
    "gemini" : "gêmeos",
    "cancer" : "câncer",
    "leo" : "leão",
    "virgo" : "virgem",
    "libra" : "libra",
    "scorpio" : "escorpião",
    "sagittarius" : "sagitário",
    "capricorn" : "capricórnio",
    "aquarius" : "aquário",
    "pisces" : "peixes"
}

function getValues(sign){
    document.getElementById("info-title-header").textContent = sign_translation[sign].charAt(0).toUpperCase() + sign_translation[sign].slice(1);
    document.getElementById("info-symbol").src = `files/signs/${sign}.svg`;

    document.getElementById("info-definition").textContent = sign_definitions[sign];
    document.getElementById("info-description").textContent = sign_descriptions[sign];
}

function tarot_destiny(){
    var yes_cards = [{
        "title" : "O sol",
        "description" : "O Sol simboliza sucesso, vitalidade e alegria. Esta carta indica que o momento é propício e as condições são favoráveis para um resultado positivo. Confie na sua energia e entusiasmo para alcançar seus objetivos."
    }, {
        "title" : "Os amantes",
        "description" : "Esta carta representa harmonia, parceria e escolhas importantes. Se você está buscando orientação em questões de relacionamento ou decisões significativas, os Amantes sugerem que as coisas irão se alinhar a seu favor."
    }, {
        "title" : "O mago",
        "description" : "O Mago é um símbolo de poder pessoal e ação. Ele indica que você tem todas as ferramentas necessárias para manifestar o que deseja. Aproveite suas habilidades e recursos para transformar suas ideias em realidade."
    }, {
        "title" : "O mundo",
        "description" : "O Mundo representa conclusão, realização e integração. Esta carta sugere que seus esforços culminarão em sucesso e que você está prestes a atingir um ciclo completo de conquista. Aproveite este momento de realização."
    }, {
        "title" : "A estrela",
        "description" : "A Estrela simboliza esperança, inspiração e serenidade. Ela indica que você está no caminho certo e que suas aspirações estão prestes a se concretizar. Mantenha a fé e continue seguindo seu caminho com otimismo."
    }]

    var no_cards = [{
        "title" : "A lua",
        "description" : "A Lua representa incerteza, ilusões e confusão. Esta carta sugere que as coisas não estão claras no momento e que é melhor esperar por mais informações antes de tomar uma decisão. Confie em sua intuição e evite agir impulsivamente."
    }, {
        "title" : "A torre",
        "description" : "A Torre simboliza mudanças abruptas, destruição e revelações. Esta carta indica que você pode enfrentar desafios inesperados e que a situação atual pode não ser sustentável. É um momento para reavaliar e reconstruir com base em novas perspectivas."
    }, {
        "title" : "O enforcado",
        "description" : "O Enforcado representa sacrifício, espera e novas perspectivas. Esta carta sugere que você precisa adotar uma nova abordagem ou esperar que as circunstâncias mudem antes de seguir adiante. Agora não é o momento ideal para ação."
    }, {
        "title" : "Os Cinco de Copas",
        "description" : "Os Cinco de Copas simbolizam perda, arrependimento e decepção. Esta carta sugere que você pode enfrentar desafios emocionais e que o resultado pode não ser o que você espera. É um momento para refletir e aprender com o passado antes de seguir em frente."
    }, {
        "title" : "O Dez de Espadas",
        "description" : "O Dez de Espadas representa fim doloroso, traição e colapso. Esta carta indica que você pode estar enfrentando uma situação difícil que não terá um final positivo imediato. É um período para aceitar a realidade e buscar novos começos no futuro."
    }]

    var decision = Math.floor(Math.random() * 2); // returns 0 or 1

    if(decision === 0){
        choice = Math.floor(Math.random() * 5);
        choice = yes_cards[choice];
    }
    else if(decision === 1){
        choice = Math.floor(Math.random() * 5);
        choice = no_cards[choice];
    }

    document.getElementById("destiny-header").textContent = choice["title"];
    document.getElementById("destiny-text").textContent = choice["description"];

    if(decision === 0) {
        colors = ["#F24B78", "#F29D52", "#495ABF"]
        document.getElementById("destiny-header").style.color = colors[Math.floor(Math.random() * 3)];
    }
    else if(decision === 1){
        colors = ["#f0f8ff8a", "#182859", "#4f6354"]
        document.getElementById("destiny-header").style.color = colors[Math.floor(Math.random() * 3)];
    }
}
