import { createContext, useContext, useState, useEffect } from "react";

const apiContext = createContext();

const ApiContextProvider = ({ children }) => {
    const [searchData, setSearchData] = useState();
    const [input, setInput] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [images, setImages] = useState([]);
    const [showImages, setShowImages] = useState([]);
    const [totalImages, setTotalImages] = useState();

    const searchApi = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=44cf91bab802d1f76715161f5e295885&text=${input}&format=json&nojsoncallback=1&safe_search=1`;

    const imageURL = `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=44cf91bab802d1f76715161f5e295885&format=json&nojsoncallback=1&safe_search=1`;

    const getSearchData = async () => {
        const res = await fetch(searchApi);
        const data = await res.json();

        if (data?.photos?.photo) {
            setImages(data.photos.photo);
            setShowImages(data.photos.photo.slice(0, 20));
        }
    };

    const searchSubmitHandler = (e) => {
        if (input && !suggestions.includes(input)) {
            localStorage.setItem(
                "searchSuggestion",
                JSON.stringify([input, ...suggestions])
            );
            setSuggestions((prev) => [...prev, input]);
        }
        getSearchData();
    };
    const inputChangeHandler = (e) => {
        setInput(e.target.value);
    };

    const fetchImages = async () => {
        const res = await fetch(imageURL);
        const data = await res.json();
        setImages(data.photos.photo);
        setTotalImages(data.photos.photo.length);
        setShowImages(data.photos.photo.slice(0, 20));
    };

    const fetchMoreData = async () => {
        setShowImages((prev) => [
            ...prev,
            ...images.slice(showImages.length, showImages.length + 10)
        ]);
    };

    useEffect(() => {
        searchSubmitHandler();
    }, [input]);

    useEffect(() => {
        fetchImages();
        const searchSuggestions = JSON.parse(
            localStorage.getItem("searchSuggestion")
        );
        if (searchSuggestions) {
            setSuggestions(searchSuggestions);
        }
    }, []);

    return (
        <apiContext.Provider
            value={{
                searchData,
                input,
                setInput,
                inputChangeHandler,
                suggestions,
                searchSubmitHandler,
                images,
                showImages,
                totalImages,
                fetchMoreData
            }}
        >
            {children}
        </apiContext.Provider>
    );
};

const useGlobalApi = () => useContext(apiContext);

export { ApiContextProvider, useGlobalApi };
