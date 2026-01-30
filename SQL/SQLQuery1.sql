--insert into Medical(ID, Height, BodyWeight, BloodGroup, GenoType, Sex)
--values(002, 14.55, 60, 'RH Positive', 'A-', 'Female'),
--	(003, 13.51, 56, 'RH Positive', 'A-', 'Male'),
--	(004, 17.25, 66, 'RH Negative', 'A+', 'Male'),
--	(005, 18.25, 69, 'RH Negative', 'A+', 'Female'),
--	(006, 18.15, 59, 'RH Negative', 'A+', 'Female'),
--	(007, 16.45, 59, 'RH Positive', 'A-', 'Female'),
--	(008, 13.25, 55, 'RH Negative', 'A+', 'Male'),
--	(009, 13.15, 59, 'RH Positive', 'A-', 'Female'),
--	(010, 16.15, 69, 'RH Positive', 'A-', 'Male');

--update Medical set BodyWeight=55 where ID=3;

--select * from Medical where BodyWeight>15

--create table stuRec(
--	ID int primary key,
--	Gender varchar(1) null,
--	CGPA float null
--)

--insert into stuRec(ID, Gender, CGPA)
--values(8, 'M', 2.48),
--	(9, 'M', 4.50),
--	(10, 'F', 4.49),
--	(11, 'M', 3.53),
--	(12, 'F', 4.35),
--	(13, 'F', 5.00),
--	(14, 'M', 4.15)

SELECT * FROM  stuRec where Gender='F' and CGPA>4.5 and CGPA=4.5