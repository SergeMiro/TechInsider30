// import axios from 'axios';

// export const fetchTopPostsWithMostViews = async () => {
//   const channels = ['mir_programmer', 'ptichka_news', 'technology_novosti'];
//   const requests = channels.map(channel => {
//     const options = {
//       method: 'GET',
//       url: 'https://telegram-channel.p.rapidapi.com/channel/message',
//       params: {
//         channel: channel,
//         limit: '3'
//       },
//       headers: {
//         'X-RapidAPI-Key': 'afeb30dcaemshf762620316a72bap1a69d4jsn9ab99969886c',
//         'X-RapidAPI-Host': 'telegram-channel.p.rapidapi.com'
//       }
//     };
//     return axios.request(options);
//   });

//   try {
//     const responses = await Promise.all(requests);
//     const postsFromAllChannels = responses.map(response => response.data);

//     // Flatten the array of posts and sort by views
//     const allPosts = [].concat(...postsFromAllChannels);
//     allPosts.sort((a, b) => b.views - a.views);

//     console.log('Посты с наибольшим количеством просмотров из всех каналов:');
//     console.log(allPosts);

//     return allPosts;
//   } catch (error) {
//     console.error('Произошла ошибка при получении данных:', error);
//     return null;
//   }
// };

