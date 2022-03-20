class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  async mostPopular() {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=6&key=${this.key}`,
      this.getRequestOptions
    );
    const result_1 = await response.json();
    return result_1.items;
  }

  async searchVideos(searchText) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchText}&maxResults=6&key=${this.key}`,
      this.getRequestOptions
    );
    const result_1 = await response.json();
    const items = result_1.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
    return items;
  }
}

export default Youtube;
