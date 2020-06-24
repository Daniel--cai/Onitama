-- Create a new table called 'TableName' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('dbo.PlayerConnection', 'U') IS NOT NULL
DROP TABLE dbo.PlayerConnection
GO
-- Create the table in the specified schema
CREATE TABLE dbo.PlayerConnection
(
    PlayerConnectionId INT NOT NULL PRIMARY KEY,
    Name [NVARCHAR](50) NOT NULL,
    Identifier [NVARCHAR](50) NOT NULL,
    Code [NVARCHAR](10) NULL
);
GO

-- Create a new table called 'TableName' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('dbo.Lobby', 'U') IS NOT NULL
DROP TABLE dbo.Lobby
GO
-- Create the table in the specified schema
CREATE TABLE dbo.TableName
(
    TableNameId INT NOT NULL PRIMARY KEY,
    -- primary key column
    Code [NVARCHAR](10) NULL,
    Column1 [NVARCHAR](50) NOT NULL,
    Column2 [NVARCHAR](50) NOT NULL
    -- specify more columns here
);
GO

-- Create a new table called 'TableName' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('dbo.State', 'U') IS NOT NULL
DROP TABLE dbo.State
GO
-- Create the table in the specified schema
CREATE TABLE dbo.State
(
    StateId INT NOT NULL PRIMARY KEY,
    -- primary key column
    Name [NVARCHAR](50) NOT NULL,
    -- specify more columns here
);
GO

select *
From PlayerConnection
