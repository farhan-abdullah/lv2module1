// Reference Type ---> Object

const user: {
	company: 'Programming hero'; //type -->literal type, because we want a fix value, we can not add or substruct anything when we go to assign value to key
	firstName: string;
	middleName?: string; // ? = optional type
	lastName: string;
	readonly isMarried: boolean; //value can not be changed
} = {
	company: 'Programming hero',
	firstName: 'Mezbaul',
	middleName: 'Abedin',
	lastName: 'Persian',
	isMarried: true,
};
