import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CInputRadio,
  /*CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,*/
  CLabel,
  CSelect,
  CRow,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
//import { DocsLink } from 'src/reusable'

const AdminForm = () => {


  return (
    <>
      <CRow>
         <CCol xs="12" sm="12">
          <CCard>
            <CCardHeader>
             Jain University
          </CCardHeader>
            <CCardBody>
              <CFormGroup>
                <CLabel htmlFor="company">Semester</CLabel>
                <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Sem 1</option>
                      <option value="2">Sem 2</option>
                      <option value="3">Sem 3</option>
                      <option value="3">Sem 4</option>
                      <option value="3">Sem 5</option>
                      <option value="3">Sem 6</option>
                    </CSelect>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="company">Class</CLabel>
                <CSelect custom name="select" id="select">
                <option value="0">Please select</option>
                      <option value="1">CTIS</option>
                      <option value="2">IoT</option>
                      <option value="3">MACT</option>
                      <option value="3">SE</option>
                      <option value="3">AI</option>
                    </CSelect>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="company">Subject</CLabel>
                <CSelect custom name="select" id="select">
                <option value="0">Please select</option>
                      <option value="1">Cloud Technology</option>
                      <option value="2">Cyber Forensic</option>
                      <option value="3">Storage Management and Data Center</option>
                      <option value="2">Software Engineering</option>
                      <option value="2">Data Visualization</option>
                      <option value="2">Web Security</option>
                    </CSelect>
              </CFormGroup>
              <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="email-input">Class ID</CLabel>
                  </CCol>
                  <CCol xs="12" md="4">
                    <CInput type="email" id="email-input" name="email-input" disabled placeholder='18BT6EH8' autoComplete="email"/>

                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol tag="label" sm="2" className="col-form-label">
                    Status
                  </CCol>
                  <CCol sm="9">
                      <CSwitch
                      className="mr-1"
                      color="success"
                      defaultChecked
                      shape="pill"
                    />
                  </CCol>
                </CFormGroup>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Teacher Detail
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row>

                </CFormGroup>
                <CFormGroup row>
                <CCol xs="12" md="2">
                    <CLabel htmlFor="text-input">First Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="4">
                    <CInput id="text-input" name="text-input" placeholder="First Name" />
                  </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                  <CCol xs="12" md="2">
                    <CLabel htmlFor="text-input">Last Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="4">
                    <CInput id="text-input" name="text-input" placeholder="Last Name" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol xs="12" md="2">
                    <CLabel htmlFor="text-input">Middle Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="4">
                    <CInput id="text-input" name="text-input" placeholder="Middle Name" />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="select">Gender</CLabel>
                  </CCol>
                  <CCol xs="12" md="4">
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                      <option value="3">Others</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="select">Subject</CLabel>
                  </CCol>
                  <CCol xs="12" md="4">
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Cloud Technology</option>
                      <option value="2">Cyber Forensic</option>
                      <option value="3">Storage Management and Data Center</option>
                      <option value="2">Software Engineering</option>
                      <option value="2">Data Visualization</option>
                      <option value="2">Web Security</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>

                {/*<CFormGroup row>
                  <CCol md="3">
                    <CLabel>Radios</CLabel>
                  </CCol>
                  <CCol md="9">
                    <CFormGroup variant="checkbox">
                      <CInputRadio className="form-check-input" id="radio1" name="radios" value="option1" />
                      <CLabel variant="checkbox" htmlFor="radio1">Option 1</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox">
                      <CInputRadio className="form-check-input" id="radio2" name="radios" value="option2" />
                      <CLabel variant="checkbox" htmlFor="radio2">Option 2</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox">
                      <CInputRadio className="form-check-input" id="radio3" name="radios" value="option3" />
                      <CLabel variant="checkbox" htmlFor="radio3">Option 3</CLabel>
                    </CFormGroup>
                  </CCol>
                </CFormGroup>*/}
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel>Designation</CLabel>
                  </CCol>
                  <CCol md="4">
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio1" name="inline-radios" value="option1" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio1">HoD</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio2" name="inline-radios" value="option2" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio2">Professor</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio3" name="inline-radios" value="option3" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio3">Asst. proffesor</CLabel>
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="email-input">Teacher ID</CLabel>
                  </CCol>
                  <CCol xs="12" md="4">
                    <CInput type="email" id="email-input" name="email-input" disabled placeholder='H18CT006' autoComplete="email"/>
                  </CCol>
                </CFormGroup>
                {/*<CFormGroup row>
                  <CCol md="3"><CLabel>Checkboxes</CLabel></CCol>
                  <CCol md="9">
                    <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox
                        id="checkbox1"
                        name="checkbox1"
                        value="option1"
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1">Option 1</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2">Option 2</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox id="checkbox3" name="checkbox3" value="option3" />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox3">Option 3</CLabel>
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Inline Checkboxes</CLabel>
                  </CCol>
                  <CCol md="9">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox
                        custom
                        id="inline-checkbox1"
                        name="inline-checkbox1"
                        value="option1"
                      />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1">One</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox2" name="inline-checkbox2" value="option2" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">Two</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox3" name="inline-checkbox3" value="option3" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox3">Three</CLabel>
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CLabel col md="2" htmlFor="file-input">Upload Syllabus</CLabel>
                  <CCol xs="12" md="4">
                    <CInputFile id="file-input" name="file-input"/>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Multiple File input</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInputFile
                      id="file-multiple-input"
                      name="file-multiple-input"
                      multiple
                      custom
                    />
                    <CLabel htmlFor="file-multiple-input" variant="custom-file">
                      Choose Files...
                    </CLabel>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CLabel col md={3}>Custom file input</CLabel>
                  <CCol xs="12" md="9">
                    <CInputFile custom id="custom-file-input"/>
                    <CLabel htmlFor="custom-file-input" variant="custom-file">
                      Choose file...
                    </CLabel>
                  </CCol>
                </CFormGroup>*/}
              </CForm>
               </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Assign</CButton>
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>

        </CCol>
      </CRow>

     {/*} <CRow>
      <CCol xs="12" sm="4">
          <CCard>
            <CCardHeader>
              Example Form
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post">
                <CFormGroup>
                  <CInputGroup>
                    <CInputGroupPrepend>
                      <CInputGroupText><CIcon name="cil-user" /></CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput id="username1" name="username1" placeholder="Username" autoComplete="name"/>
                  </CInputGroup>
                </CFormGroup>
                <CFormGroup>
                  <CInputGroup>
                    <CInputGroupPrepend>
                      <CInputGroupText><CIcon name="cil-envelope-closed" /></CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="email" id="email1" name="email1" placeholder="Email" autoComplete="username"/>
                  </CInputGroup>
                </CFormGroup>
                <CFormGroup>
                  <CInputGroup>
                    <CInputGroupPrepend>
                      <CInputGroupText><CIcon name="cil-asterisk" /></CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" id="password1" name="password1" placeholder="Password" autoComplete="current-password"/>
                  </CInputGroup>
                </CFormGroup>
                <CFormGroup className="form-actions">
                  <CButton type="submit" size="sm" color="success">Submit</CButton>
                </CFormGroup>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>*/}

              </>
  )
}

export default AdminForm
