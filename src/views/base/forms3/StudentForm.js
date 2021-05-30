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

} from '@coreui/react'

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
          <CCol xs="12" sm="12"></CCol>
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
                    <CLabel htmlFor="email-input">Semester</CLabel>
                  </CCol>
                  <CCol xs="12" md="4">
                    <CInput type="email" id="email-input" name="email-input" disabled placeholder='6' autoComplete="email"/>

                  </CCol>
            </CFormGroup>

          </CCardBody>
      </CRow>
      </>
    )

}
export default StudentForm
