import { useState } from 'react';

export default function FilterCard() {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className="max-w-xs rounded-2xl border-2 border-gray-100 shadow-md">
      {/* div to add margins */}
      <div className="m-6">
        <h1 className="text-2xl font-bold">Filters</h1>
        {/* container for filter items */}
        <div></div>
        {/* container for filter dropdowns */}
        <div>
          <hr className="my-6 border-gray-400" />
          {/* a dropdown containing checkboxes for applying filters */}
          <div>
            <button className="w-11/12 font-bold text-left ml-2 focus:outline-none" onClick={() => setIsHidden(!isHidden)}>
              Roles
            </button>
            <div className={`${isHidden ? 'hidden' : ''} mt-6 ml-4`}>
              <ul>
                <li>
                  <input type="checkbox" id="business-analyst" value="business-analyst" />
                  <label className="ml-2" for="business-analyst">
                    Business Analyst
                  </label>
                </li>
                <li>
                  <input type="checkbox" id="data-scientist" value="data-scientist" />
                  <label className="ml-2" for="data-scientist">
                    Data Scientist
                  </label>
                </li>
                <li>
                  <input type="checkbox" id="developer" value="developer" />
                  <label className="ml-2" for="developer">
                    Developer
                  </label>
                </li>
                <li>
                  <input type="checkbox" id="marketing" value="marketing" />
                  <label className="ml-2" for="marketing">
                    Marketing
                  </label>
                </li>
                <li>
                  <input type="checkbox" id="product-manager" value="product-manager" />
                  <label className="ml-2" for="product-manager">
                    Product Manager
                  </label>
                </li>
                <li>
                  <input type="checkbox" id="ui-ux" value="ui-ux" />
                  <label className="ml-2" for="ui-ux">
                    UI/UX
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
