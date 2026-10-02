import locationIcon from '../../assets/location.svg'
import calenderIcon from '../../assets/calender.svg'
import './SearchBar.css'


function SearchBar() {
    return(
        
        <div className="search-bar">

            {/* Location input section */}
            <div className="search-bar__field">
                <img src={locationIcon} alt="Location" className="search-bar__field-icon" />

                <div className="search-bar__field-body">
                    <span className="search-bar__field-label">Location</span>
                    <span className="search-bar__field-value">Search your location</span>
                </div>

            </div>

            {/* vertical divider in-between the fields*/}
            <div className="search-bar__divider" />

            {/* pick up date section */}
            <div className="search-bar__field">
                <img src={calenderIcon} alt="Calender" className="search-bar__field-icon" />

                <div className="search-bar__field-body">
                    <span className="search-bar__field-label">Pickup date</span>
                    <span className="search-bar__field-value">Tue 15  Feb, 09:00 AM</span>
                </div>
            </div>

            <div className="search-bar__divider" />

            {/* Return date section */}
            <div className="search-bar__field">
                <img src={calenderIcon} alt="calender" className="search-bar__field-icon" />
                <div className="search-bar__field-body">
                    <span className="search-bar__field-label">Return date</span>
                    <span className="search-bar__field-value">Thu 16 Feb, 11:00 AM</span>
                </div>
            </div>  

            {/* search button section */}
            <button type="button" className="search-bar__button">Search</button>  

        </div>
    )

}