-- Drop old tables if re-running
DROP TABLE IF EXISTS project_skills CASCADE;
DROP TABLE IF EXISTS projects CASCADE;
DROP TABLE IF EXISTS skills CASCADE;

-- ===============================
-- Skills table
-- ===============================
CREATE TABLE skills (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    logo_url TEXT,
    description TEXT,
    years_experience INT DEFAULT 0
);

-- ===============================
-- Projects table
-- ===============================
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    description TEXT,
    repo_url TEXT,
    live_url TEXT,
    thumbnail_url TEXT
);

-- ===============================
-- Many-to-Many: project <-> skills
-- ===============================
CREATE TABLE project_skills (
    project_id INT REFERENCES projects(id) ON DELETE CASCADE,
    skill_id INT REFERENCES skills(id) ON DELETE CASCADE,
    PRIMARY KEY (project_id, skill_id)
);

-- ===============================
-- Sample Data
-- ===============================
-- Skills
INSERT INTO skills (name, logo_url, description, years_experience)
VALUES
  ('React', 'https://cdn.example.com/react.png', 'Frontend JavaScript library', 3),
  ('Node.js', 'https://cdn.example.com/node.png', 'Backend JavaScript runtime', 2),
  ('PostgreSQL', 'https://cdn.example.com/postgres.png', 'Relational database system', 2),
  ('Docker', 'https://cdn.example.com/docker.png', 'Containerization platform', 1);

-- Projects
INSERT INTO projects (title, description, repo_url, live_url, thumbnail_url)
VALUES
  ('Portfolio Website',
    'Personal website built with React and Tailwind.',
    'https://github.com/yourusername/portfolio',
    'https://yourportfolio.com',
    'https://cdn.example.com/thumb-portfolio.png'),
  ('E-commerce API',
    'Backend API for e-commerce built with Node.js and PostgreSQL.',
    'https://github.com/yourusername/ecommerce-api',
    NULL,
    'https://cdn.example.com/thumb-ecommerce.png');

-- Link projects to skills
INSERT INTO project_skills (project_id, skill_id)
VALUES
  (1, 1), -- Portfolio Website uses React
  (1, 4), -- Portfolio Website uses Docker
  (2, 2), -- E-commerce API uses Node.js
  (2, 3); -- E-commerce API uses PostgreSQL
