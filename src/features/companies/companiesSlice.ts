import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface Employee {
  id: string;
  name: string;
  surname: string;
  role: string;
}

export interface Company {
  id: string;
  name: string;
  address: string;
  emploees: Employee[];
}

export interface CompaniesState {
  companies: Company[];
}

const initialState: CompaniesState = {
  companies: [
    {
      id: "1",
      name: "Company 1",
      address: "address 1",
      emploees: [
        { name: "Rob", surname: "Jones", id: "11", role: "cunt" },
        { name: "Bob", surname: "Lones", id: "12", role: "cunt" },
        { name: "Bor", surname: "Bones", id: "13", role: "cunt" },
        { name: "Robber", surname: "Dones", id: "14", role: "cunt" },
        { name: "John", surname: "Vones", id: "15", role: "cunt" },
        { name: "Lennie", surname: "Lones", id: "16", role: "cunt" },
      ],
    },
    {
      id: "2",
      name: "Company 2",
      address: "address 2",
      emploees: [
        { name: "Rob", surname: "Jones", id: "17", role: "cunt" },
        { name: "Bob", surname: "Lones", id: "18", role: "cunt" },
      ],
    },
    {
      id: "3",
      name: "Company 3",
      address: "address 3",
      emploees: [],
    },
  ],
};

export const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    addCompany: (
      state,
      action: PayloadAction<Pick<Company, "name" | "address">>
    ) => {
      if (action.payload.name.trim() && action.payload.address.trim())
        state.companies.push({ ...action.payload, id: uuidv4(), emploees: [] });
    },
    updateCompany: (
      state,
      action: PayloadAction<Pick<Company, "name" | "address" | "id">>
    ) => {
      if (
        action.payload.name.trim() &&
        action.payload.address.trim() &&
        action.payload.id.trim()
      ) {
        const company = state.companies.find(
          (el) => el.id === action.payload.id
        );
        if (company) {
          company.name = action.payload.name;
          company.address = action.payload.address;
        }
      }
    },
    addEmployee: (
      state,
      action: PayloadAction<{
        newEmployee: Pick<Employee, "name" | "surname" | "role">;
        companyId: string;
      }>
    ) => {
      const { newEmployee, companyId } = action.payload;
      if (
        newEmployee.name.trim() &&
        newEmployee.surname.trim() &&
        newEmployee.role.trim()
      )
        state.companies
          .find((el) => el.id === companyId)
          ?.emploees.push({ ...action.payload.newEmployee, id: uuidv4() });
    },
    updateEmployee: (
      state,
      action: PayloadAction<{
        newEmployee: Pick<Employee, "name" | "surname" | "role" | "id">;
        companyId: string;
      }>
    ) => {
      const { newEmployee, companyId } = action.payload;
      if (
        newEmployee.name.trim() &&
        newEmployee.surname.trim() &&
        newEmployee.role.trim() &&
        newEmployee.id.trim()
      ) {
        const employee = state.companies
          .find((el) => el.id === companyId)
          ?.emploees.find((el) => el.id === newEmployee.id);
        if (employee) {
          employee.name = newEmployee.name;
          employee.surname = newEmployee.surname;
          employee.role = newEmployee.role;
        }
      }
    },
    deleteCompanies: (state, action: PayloadAction<string[]>) => {
      state.companies = state.companies.filter(
        (company) => !action.payload.includes(company.id)
      );
    },
    deleteEmployees: (
      state,
      action: PayloadAction<{ companyId: string; employeesIds: string[] }>
    ) => {
      state.companies = state.companies.map((company) => {
        if (company.id !== action.payload.companyId) return company;
        company.emploees = company.emploees.filter(
          (employee) => !action.payload.employeesIds.includes(employee.id)
        );
        return company;
      });
    },
  },
});

export const {
  addCompany,
  addEmployee,
  updateCompany,
  updateEmployee,
  deleteCompanies,
  deleteEmployees,
} = companiesSlice.actions;

export default companiesSlice.reducer;
