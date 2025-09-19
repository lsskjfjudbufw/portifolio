const videosContainer = document.getElementById('videos-container');
const filterButtons = document.querySelectorAll('.filter-btn');

const videos = [
    { filename: 'curto_1.mp4', title: 'Edit curto 1' },
    { filename: 'curto_2.mp4', title: 'Edit curto 2' },
    { filename: 'curto_3.mp4', title: 'Edit curto 3' },
    { filename: 'longo_1.mp4', title: 'Edit longo 1' },
    { filename: 'longo_2.mp4', title: 'Edit longo 2' }
];

function getCategoria(filename){
    if(filename.startsWith('curto_')) return 'curtos';
    if(filename.startsWith('longo_')) return 'longos';
    return 'outros';
}

function criarVideoItem(video){
    const categoria = getCategoria(video.filename);
    const div = document.createElement('div');
    div.classList.add('video-item', categoria);
    div.setAttribute('data-title', video.title);

    const vid = document.createElement('video');
    vid.src = `video/${video.filename}`;
    vid.classList.add('portfolio-video');
    vid.controls = true;

    div.appendChild(vid);
    videosContainer.appendChild(div);
}

function carregarVideos(filtro = 'curtos'){
    videosContainer.innerHTML = '';
    videos.forEach(video=>{
        if(filtro==='todos' || getCategoria(video.filename)===filtro){
            criarVideoItem(video);
        }
    });
}

filterButtons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        filterButtons.forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        carregarVideos(btn.getAttribute('data-filter'));
    });
});

// Carrega vídeos iniciais
carregarVideos('curtos');

/* Avaliações */
const formAvaliacao = document.getElementById('form-avaliacao');
const avaliacoesLista = document.getElementById('avaliacoes-lista');

formAvaliacao.addEventListener('submit', function(e){
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const comentario = document.getElementById('comentario').value.trim();
    const nota = document.getElementById('nota').value;

    if(!nome || !comentario || !nota) return;

    const div = document.createElement('div');
    div.classList.add('avaliacao-item');
    div.innerHTML = `<strong>${nome}</strong> - ${nota} ⭐<p>${comentario}</p>`;

    avaliacoesLista.prepend(div);
    formAvaliacao.reset();
});
