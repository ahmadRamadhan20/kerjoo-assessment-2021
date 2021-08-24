import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { apiDesa, apiKabupaten, apiKecamatan, apiProvinsi } from '../API';
import DropdownDat from '../Dropdown';

export default function ShowProv() {
  const provinsiID = useSelector((state) => state.provinsiID);
  const kabupatenID = useSelector((state) => state.kabupatenID);
  const kecamatanID = useSelector((state) => state.kecamatanID);

  return (
    <>
      <Container className='m-4'>
        <Row>
          <Col>
            <DropdownDat DropTitle='Provinsi' API={apiProvinsi} />
          </Col>
          <Col>{provinsiID ? <DropdownDat DropTitle='Kabupaten' API={`${apiKabupaten}/${provinsiID}`} /> : null}</Col>
          <Col>{kabupatenID ? <DropdownDat DropTitle='Kecamatan' API={`${apiKecamatan}/${kabupatenID}`} /> : null}</Col>
          <Col>{kecamatanID ? <DropdownDat DropTitle='Desa' API={`${apiDesa}/${kecamatanID}`} /> : null}</Col>
        </Row>
      </Container>
    </>
  );
}