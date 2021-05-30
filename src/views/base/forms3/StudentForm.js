import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CLabel,
  CRow,
  CSelect,
  CDataTable,
} from '@coreui/react'

const fields = ['SlNo','SUBJECTS', 'INTERNAL MARKS', 'UNIVERSITY EXAMINATION MARKS' , 'PRACTICAL MARKS','TOTAL', 'CREDITS', 'GRADE'  ]
const StudentForm = () => {

    return (
      <>
      <CRow>
      <CCol xs="12" sm="12">
          <CCard>
            <CCardHeader>
             Student Result
          </CCardHeader>
          </CCard>
          </CCol>
          <CCol xs="12" sm="12">
          <CCardBody>
          <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="email-input">First Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="4">
                    <CInput type="email" id="email-input" name="email-input" disabled placeholder='Saurav' />

                  </CCol>
            </CFormGroup>
            <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="email-input">Last Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="4">
                    <CInput type="email" id="email-input" name="email-input" disabled placeholder='Saurav' autoComplete="email"/>

                  </CCol>
            </CFormGroup>
            <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="email-input">Middle Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="4">
                    <CInput type="email" id="email-input" name="email-input" disabled autoComplete="email"/>

                  </CCol>
            </CFormGroup>
            <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="email-input">Fathers' Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="4">
                    <CInput type="email" id="email-input" name="email-input" disabled placeholder='' autoComplete="email"/>

                  </CCol>
            </CFormGroup>
            <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="email-input">Mothers' Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="4">
                    <CInput type="email" id="email-input" name="email-input" disabled placeholder='' autoComplete="email"/>
                  </CCol>
            </CFormGroup>
            <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="email-input">Department</CLabel>
                  </CCol>
                  <CCol xs="12" md="4">
                    <CInput type="email" id="email-input" name="email-input" disabled placeholder='CSE-Specialization' autoComplete="email"/>
                   </CCol>
            </CFormGroup>
            <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="email-input">Branch</CLabel>
                  </CCol>
                  <CCol xs="12" md="4">
                    <CInput type="email" id="email-input" name="email-input" disabled placeholder='CSE-CTIS' autoComplete="email"/>

                  </CCol>
            </CFormGroup>
            <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="select">Semester</CLabel>
                  </CCol>
                  <CCol xs="12" md="4">
                    <CSelect custom name="select" id="select">
                    <option value="1">Sem 1</option>
                      <option value="2">Sem 2</option>
                      <option value="3">Sem 3</option>
                      <option value="3">Sem 4</option>
                      <option value="3">Sem 5</option>
                      <option value="3">Sem 6</option>
                      <option value="3">Sem 7</option>
                      <option value="3">Sem 8</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>

          </CCardBody>
          </CCol>
      </CRow>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              Your Result
            </CCardHeader>
            <CCardBody>
            <CDataTable

              fields={fields}
              striped
              itemsPerPage={10}
              pagination
              />
            </CCardBody>
          </CCard>
        </CCol>
        </CRow>

        </>
    )
}
export default StudentForm
