import { CollectionConfig } from "payload/types";
import { APIError } from "payload/errors"
import { itsadminorself } from "../access/itsadminorself";
import { ifitsadmin } from "../access/ifitsadmin";

const Users: CollectionConfig = {
  labels: {
    plural: "Usuarios",
    singular: "Usuario",
  },
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "name",
  },
  access: {
    create: ifitsadmin,
    read: itsadminorself,
    update: ifitsadmin,
    delete: ifitsadmin,
    /*admin: ifitsadmin,*/
  },
  fields: [
    {
      name: "roles",
      label: "Seleccionar nivel de Usuario",
      type: "select",
      hasMany: true,
	  required: true,
      options: [
        {
          label: "Admin",
          value: "Admin",
        },
        {
          label: "User",
          value: "User",
        },
      ],
	  hooks: {
		beforeChange: [
		  ({ data }) => {
			if (data.roles && data.roles.length > 1) {
			  throw new APIError('El campo "Roles" solo puede tener un valor', 403);
			}
		  },
		],
	  },
    },
    {
      name: "name",
      label: "Nombres",
      type: "text",
	  required: true,
    },
    {
      name: "lastName",
      label: "Apellidos",
      type: "text",
	  required: true,
    },
    {
      name: "DateBorn",
      label: "Fecha de Nacimiento",
      type: "date",
	  required: true,
      admin: {
        date: {
          pickerAppearance: "dayOnly",
          displayFormat: "d MMM yyy",
        },
      },
    },
	{
		name: "IdentificationDocument",
		label: "Seleccionar tipo de documento de identificacion",
		type: "select",
		hasMany: true,
		required: true,
		options: [
			{
				label: "DNI",
				value: "DNI",
			},
			{
				label: "Carnet de extranjeria",
				value: "Carnet de extranjeria",
			},
			{
				label: "Pasaporte",
				value: "Pasaporte",
			},
		],
	},
    {
      name: "documentIdentificationValue",
      label: "Documento de identificacion",
      type: "number",
      unique: true,
	  required: true,
    },
    {
      name: "district",
      label: "Distrito",
      type: "relationship",
      relationTo: "district",
      hasMany: true,
	  required: true,
    },
    {
      name: "province",
      label: "Provincia",
      type: "relationship",
      relationTo: "province",
      hasMany: true,
	  required: true,
    },
    {
      name: "department",
      label: "Departamento",
      type: "relationship",
      relationTo: "department",
      hasMany: true,
	  required: true,
    },
    {
      name: "subscription",
      label: "Subscripción",
      type: "relationship",
      relationTo: "subscription",
      hasMany: true,
	  required: true,
    },
    {
      name: "subscriptionStar",
      type: "date",
      defaultValue: () => new Date().toISOString().substr(0, 10),
      admin: {
        date: {
          pickerAppearance: "dayOnly",
          displayFormat: "d MMM yyy",
        },
      },
    },
	{
		name: "subscriptionEnd",
		type: "date",
		admin: {
		  readOnly: true,
		},
		defaultValue: ({ context }) => {
		  if (context && context.data && context.data.subscriptionStar && context.data.subscription) {
			return calculateSubscriptionEnd(context.data.subscriptionStar, context.data.subscription);
		  }
		  return null;
		},
	},
	{
		name: "statusSubscription",
		label: "Estado de suscripción:",
		type: "text",
		admin: {
			readOnly: true,
		},
		defaultValue: "activado",
	},
  ],
};


const calculateSubscriptionEnd = (subscriptionStar, subscription) => {
  if (subscriptionStar && subscription) {
    const startDate = new Date(subscriptionStar);
    const endDate = new Date(startDate);

    if (subscription === "Plan Mensual") {
      endDate.setMonth(startDate.getMonth() + 1);
    } else if (subscription === "Plan Anual") {
      endDate.setFullYear(startDate.getMonth() + 12);
    }

    return endDate.toISOString().substr(0, 10);
  }
  return null;
};
export default Users;