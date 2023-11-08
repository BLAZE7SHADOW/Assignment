
import { useGlobalApi } from "../contexts/apiContext";

export default function Navbar() {
    const {
        setInput,
        input,
        inputChangeHandler,
        suggestions,
        searchSubmitHandler
    } = useGlobalApi();

    const filterSuggestion = input
        ? suggestions.filter((suggestion) =>
            suggestion.toLowerCase().includes(input.toLowerCase())
        )
        : [];

    return (
        <header className="bg-gray-100 relative p-5 my-2 flex justify-around items-center">
            <span className="logo text-6xl py-7 font-bold">PicArts</span>
            <form className="" onSubmit={searchSubmitHandler}>
                <input

                    className="p-1 outline-none"
                    required
                    type="search"
                    placeholder="Search Images..."
                    onChange={inputChangeHandler}
                    value={input}
                />
                <button className="bg-red-600 p-1 text-white" type="submit">Search</button>
                <div className="suggestions  max-h-[70px] w-[300px] overflow-auto  bg-slate-300 ">
                    {filterSuggestion.map((suggestion, ind) =>
                        suggestions !== input ? (
                            <p
                                key={ind}
                                className="suggestion-item  bg-gray-300 w-[244px] px-2 py-1 hover:bg-slate-500"
                                onClick={() => setInput(suggestion)}
                            >
                                {suggestion}
                            </p>
                        ) : (
                            <p></p>
                        )
                    )}
                </div>
            </form>
        </header>
    );
}
