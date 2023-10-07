const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCFdE5U_0S6s8HeaXSbH9_Fg&part=snippet%2Cid&order=date&maxResults=10'

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cb52a0d1f4msh6384ad0ca4bd9d0p15c71bjsn86a6df48ec6f',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
  }
  
  (async () => {
    try {
      const videos = await fetchData(API);
      let view = `
      ${videos.items.map(video => `
        <div class="group relative">
          <!-- Enlace al vídeo en YouTube al hacer clic en la imagen -->
          <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank">
            <div
              class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
              <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
          </a>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <!-- Enlace al vídeo en YouTube al hacer clic en el título -->
              <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank">${video.snippet.title}</a>
            </h3>
          </div>
        </div>
      `).slice(0,3).join('')}`;
      content.innerHTML = view;
    } catch (error) {
      console.log(error);
    }
  })();