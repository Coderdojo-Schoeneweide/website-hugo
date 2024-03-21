let showFilter = false;
let filterArrow;
let filter;
let results;
let section_blogs;

let ageFilter = [];
let durationFilter = [];
let readingFilter = [];
let titleFilter = [];
let tagFilters = [];

document.addEventListener("DOMContentLoaded", () => {
    section_blogs = document.querySelector("#all-posts");
    filter = document.querySelector("#filter");
    results = document.querySelectorAll("#results li");

    const filterToggle = document.querySelector("#filter-toggle");
    filterArrow = filterToggle.querySelector("span");
    filterToggle.addEventListener("click", toggleFilter);

    const filters = new Map();
    //Mapping -> Filter , [selector (html element id), html element]
    //Filter blogs
    filters.set(tagFilters, ["#tag-filters input", "checkbox"]);
    filters.set(titleFilter, ["#title-search-filter", "input"]);
    filters.set(readingFilter, ["#readingTime-filters", "select"]);
    //Filter workshop
    filters.set(ageFilter, ["#age-filter", "select"]);
    filters.set(durationFilter, ["#duration-filter", "select"]);

    addEventListenerToFilter(filters);
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

function addEventListenerToFilter(filters) {
    filters.forEach((listElement, filterName) => {
        try {
            const selector = listElement[0];
            const type = listElement[1];

            if (type === "checkbox") {
                filter.querySelectorAll(selector)
                    .forEach(checkbox => checkbox.addEventListener("change", event => {
                        if (event.target.checked)
                            filterName.push(event.target.value);
                        else
                            filterName.splice(filterName.indexOf(event.target.value), 1);
                        updateFilterResults();
                    }));
            } else if (type === "input") {
                filter.querySelector(selector).addEventListener("input", event => {
                    const value = event.target.value !== "" ? event.target.value : null;
                    filterName.pop();
                    if (value != null) {
                        filterName.push(value.toLowerCase());
                    }
                    updateFilterResults();
                });
            } else {
                filter.querySelector(selector).addEventListener("change", event => {
                    const value = event.target.value !== "" ? event.target.value : null;
                    filterName.pop();
                    if (value != null) {
                        filterName.push(value.toLowerCase());
                    }

                    updateFilterResults();
                });
            }

        } catch (e) {
            // adding an eventListener can cause an error if selector does not exist
            // Some of the filters don't exist on the other pages
            // e.g. workshop page does not have a selector called #title-search-filter
        }
    })
}

function updateFilterResults() {
    if (section_blogs != null) {
        results.forEach(blog => {
            blog.hidden = !((readingFilter.length === 0 || blog.dataset.readingtime === readingFilter[0]) &&
                (titleFilter.length === 0 || blog.dataset.title.toLowerCase().includes(titleFilter[0]) === true) &&
                (tagFilters.length === 0 || tagFilters.every(c => blog.dataset.tags.indexOf(c) >= 0)));
        });
    } else {
        results.forEach(workshop => {
            workshop.hidden = !((ageFilter.length === 0 || workshop.dataset.age.toLowerCase() === ageFilter[0]) &&
                (durationFilter.length === 0 || workshop.dataset.duration.toLowerCase() === durationFilter[0]) &&
                (tagFilters.length === 0 || tagFilters.every(c => workshop.dataset.tags.indexOf(c) >= 0)));
        });
    }
}