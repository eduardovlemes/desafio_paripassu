import { IoSearchOutline } from "react-icons/io5";

export default function SearchBar({ onChange, placeholder, value, onClick }) {
    return (
        <div className="search-field">
            <input
                className="search-bar"
                type="text"
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
            <IoSearchOutline size="24" className="search-icon" onClick={onClick}/>
        </div>
    );
}
