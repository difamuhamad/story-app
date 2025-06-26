const HomePage = {
  async init() {
    await this._initialData();
  },

  async _initialData() {
    try {
      const fetchResult = await fetch('/data/data.json');
      // const dataResult = await fetchResult.json();
      const dataResult = [];
      this._storyList = dataResult.listStory;
      console.log(this._storyList);
      this._populateStoryCard(this._storyList);
    } catch (error) {
      console.error('Error fetching data:', error);
      this._showError();
    }
  },

  _showError() {
    const storyContainer = document.querySelector('#storyContainer');
    storyContainer.innerHTML = `
      <div class="col-12">
        <div class="alert alert-danger text-center">
          Failed to load stories. Please try again later.
        </div>
      </div>
    `;
  },

  _populateStoryCard(storyData = null) {
    if (!(typeof storyData === 'object')) {
      throw new Error(`Parameter storyData should be an object.`);
    }

    if (!Array.isArray(storyData)) {
      throw new Error('Parameter storyData should be an array.');
    }

    const storyContainer = document.querySelector('#storyContainer');
    storyContainer.innerHTML = '';

    if (storyData.length <= 0) {
      storyContainer.innerHTML = this._templateEmptyStory();
      return;
    }

    storyData.forEach((story) => {
      storyContainer.innerHTML += this._templateStoryCard(story);
    });
  },

  _templateStoryCard(story) {
    return `
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <img src="${story.photoUrl}" class="card-img-top" alt="${
      story.name
    }" style="height: 200px; object-fit: cover;">
          <div class="card-body">
            <h5 class="card-title">${story.name}</h5>
            <p class="card-text">${story.description}</p>
          </div>
          <div class="card-footer bg-transparent">
            <small class="text-muted">${new Date(
              story.createdAt
            ).toLocaleDateString()}</small>
          </div>
        </div>
      </div>
    `;
  },

  _templateEmptyStory() {
    return `
      <div class="col-12">
        <div class="alert alert-info text-center">
          No stories available
        </div>
      </div>
    `;
  },
};

export default HomePage;
