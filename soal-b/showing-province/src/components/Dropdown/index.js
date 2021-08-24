import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const DropdownDat = ({ DropTitle, API }) => {
  const [dataRegions, setdataRegions] = useState('');
  const dispatch = useDispatch();

  const getDataRegions = () => {
    axios.get(API).then((response) => setdataRegions(response.data));
  };

  const handleClick = (e) => {
    const data = e.id;
    if (e.name === 'Provinsi') dispatch({ type: 'CHANGE_PROVINSI', action: data });
    if (e.name === 'Kabupaten') dispatch({ type: 'CHANGE_KABUPATEN', action: data });
    if (e.name === 'Kecamatan') dispatch({ type: 'CHANGE_KECAMATAN', action: data });
    if (e.name === 'Desa') dispatch({ type: 'CHANGE_DESA', action: data });
  };

  useEffect(() => {
    getDataRegions();
  }, [dataRegions]);

  return (
    <>
      <Dropdown>
        <DropdownButton id='dropdown-basic-button' title={DropTitle}>
          {dataRegions &&
            dataRegions.map(({ id, name }) => (
              <div key={id}>
                <Dropdown.Item onClick={(e) => handleClick(e.target)} id={id} name={DropTitle}>
                  {name}
                </Dropdown.Item>
              </div>
            ))}
        </DropdownButton>
      </Dropdown>
    </>
  );
};

export default DropdownDat;