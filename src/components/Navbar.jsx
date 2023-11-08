
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
        <header className="bg-gray-100 relative p-5 my-2 flex justify-around items-center flex-wrap">
            <span className="logo text-6xl py-7 font-bold pr-14">PicArts</span>
            <form className="" onSubmit={searchSubmitHandler}>
                <input

                    className="p-1 outline rounded-sm w-[400px]"
                    required
                    type="search"
                    placeholder="Search Images..."
                    onChange={inputChangeHandler}
                    value={input}
                />

                <div className="suggestions  max-h-[70px] w-[400px] overflow-auto overflow-x-hidden    bg-slate-300 ">
                    {filterSuggestion.map((suggestion, ind) =>
                        suggestions !== input ? (
                            <p
                                key={ind}
                                className="suggestion-item scrollbar-dark  bg-gray-200 hover:text-white w-[400px] px-2 py-1 hover:bg-slate-500"
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
