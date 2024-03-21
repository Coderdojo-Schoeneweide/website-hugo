let showFilter = false;
let filterArrow;
let filter;
let results;
let section_blogs;

let ageFilter = null;
let durationFilter = null;
let readingFilter = null;
let titleFilter = null;
let tagFilters = [];

document.addEventListener("DOMContentLoaded", () => {
    section_blogs = document.querySelector("#all-posts");
    filter = document.querySelector("#filter");
    results = document.querySelectorAll("#results li");

    const filterToggle = document.querySelector("#filter-toggle");
    filterArrow = filterToggle.querySelector("span");
    filterToggle.addEventListener("click", toggleFilter);

    //Filter workshop + blogs
    filter.querySelectorAll("#tag-filters input")
        .forEach(checkbox => checkbox.addEventListener("change", event => {
            if (event.target.checked)
                tagFilters.push(event.target.value);
            else
                tagFilters.splice(tagFilters.indexOf(event.target.value), 1);
            updateFilterResults();
        }));

    if (section_blogs != null) {
        //Filter blogs
        filter.querySelector("#title-search-filter").addEventListener("input", event => {
            titleFilter = event.target.value !== "" ? event.target.value : null;
            if (titleFilter != null) {
                titleFilter = titleFilter.toLowerCase();
            }
            updateFilterResults();
        });

        //Filter blogs
        filter.querySelector("#readingTime-filters").addEventListener("change", event => {
            readingFilter = event.target.value !== "" ? event.target.value : null;
            updateFilterResults();
        });
    } else {

        //Filter workshop
        filter.querySelector("#age-filter").addEventListener("change", event => {
            ageFilter = event.target.value !== "" ? event.target.value : null;
            updateFilterResults();
        });

        //Filter workshop
        filter.querySelector("#duration-filter").addEventListener("change", event => {
            durationFilter = event.target.value !== "" ? event.target.value : null;
            updateFilterResults();
        });
    }
});

function toggleFilter(event) {
    event.preventDefault();
    showFilter = !showFilter;
    if (showFilter) {
        filterArrow.innerText = "▾";
        filter.classList.add("show");
    } else {
        filterArrow.innerText = "▸";
        filter.classList.remove("show");
    }
}

function updateFilterResults() {
    if (section_blogs != null) {
        results.forEach(blog => {
            blog.hidden = !((!readingFilter || blog.dataset.readingtime === readingFilter) &&
                (!titleFilter || blog.dataset.title.toLowerCase().includes(titleFilter) === true) &&
                (tagFilters.length === 0 || tagFilters.every(c => blog.dataset.tags.indexOf(c) >= 0)));
        });
    } else {
        results.forEach(workshop => {
            workshop.hidden = !((!ageFilter || workshop.dataset.age === ageFilter) &&
                (!durationFilter || workshop.dataset.duration === durationFilter) &&
                (tagFilters.length === 0 || tagFilters.every(c => workshop.dataset.tags.indexOf(c) >= 0)));
        });
    }
}