#!/usr/bin/env ts-node

import fs from 'fs';
import path from 'path';

const args = process.argv.slice(2);
const type = args[0];
const rawName = args[1];

if (!type || !rawName) {
    console.error('❌ Usage: make/delete [type|resource] [Name]');
    process.exit(1);
}

// Fungsi untuk mengubah nama menjadi PascalCase
const toPascalCase = (str: string) => {
    return str
        .split(/[-_]/) // Pisahkan berdasarkan - atau _
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');
};

const name = toPascalCase(rawName); // Mengubah nama menjadi PascalCase
const nameLower = rawName.toLowerCase();

const templates: Record<string, (name: string) => string> = {
    controller: (name) =>
        `import { Request, Response, NextFunction } from "express";

export default class ${name}Controller {
    static async index(req: Request, res: Response, next: NextFunction) {
        try {
            res.send("${name} index");
        } catch (e) {
            next(e);
        }
    }

    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            res.send("${name} create form");
        } catch (e) {
            next(e);
        }
    }

    static async store(req: Request, res: Response, next: NextFunction) {
        try {
            res.send("${name} stored");
        } catch (e) {
            next(e);
        }
    }

    static async show(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            res.send(\`${name} show \${id}\`);
        } catch (e) {
            next(e);
        }
    }

    static async edit(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            res.send(\`${name} edit \${id}\`);
        } catch (e) {
            next(e);
        }
    }

    static async update(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            res.send(\`${name} updated \${id}\`);
        } catch (e) {
            next(e);
        }
    }

    static async destroy(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            res.send(\`${name} deleted \${id}\`);
        } catch (e) {
            next(e);
        }
    }
}
`,

    service: (name) =>
        `export default class ${name}Service {
    // TODO: Implement ${name} service
}
`,

    repository: (name) =>
        `export default class ${name}Repository {
    // TODO: Implement ${name} repository
}
`,

    validation: (name) =>
        `export default class ${name}Validation {
    // TODO: Implement ${name} validation
}
`,

    test: (name) =>
        `import request from "supertest";
import 'dotenv/config';

const api = \`\${process.env.EXPRESS_TEST}\`;

describe("${name}Controller", () => {
    it("should return a 200 status code", async () => {
        const response = await request(api).get('/');
        expect(response.status).toBe(200);
    });
});
`,
};

// ✅ Path dari root project, bukan dari __dirname
const createFile = (dir: string, fileName: string, content: string) => {
    const fullPath = path.join(process.cwd(), dir, fileName);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });

    if (fs.existsSync(fullPath)) {
        console.warn(`⚠️  File already exists: ${path.join(dir, fileName)}`);
        return;
    }

    fs.writeFileSync(fullPath, content, { flag: 'w' });
    console.log(`✅ Created: ${path.join(dir, fileName)}`);
};

const deleteFile = (dir: string, fileName: string) => {
    const fullPath = path.join(process.cwd(), dir, fileName);
    if (fs.existsSync(fullPath)) {
        fs.unlinkSync(fullPath);
        console.log(`🗑️  Deleted: ${path.join(dir, fileName)}`);
    } else {
        console.warn(`⚠️  File not found: ${path.join(dir, fileName)}`);
    }
};

// ✅ Delete folder jika kosong
const deleteFolderIfEmpty = (folder: string) => {
    const fullPath = path.join(process.cwd(), folder);
    if (fs.existsSync(fullPath) && fs.readdirSync(fullPath).length === 0) {
        fs.rmdirSync(fullPath);
        console.log(`🗑️  Deleted folder: ${folder}`);
    }
};

// ✅ Proses file create atau delete
const processFile = (
    action: 'create' | 'delete',
    type: string,
    name: string
) => {
    const baseName = name.toLowerCase(); // for filename
    const className = toPascalCase(name);  // for class name

    const fileName = type === 'test'
        ? `${baseName}.test.ts`
        : `${baseName}.${type}.ts`;

    const folder = path.join('src', 'domains', baseName);

    if (action === 'create') {
        const content = templates[type](className);
        createFile(folder, fileName, content);
    } else {
        deleteFile(folder, fileName);
    }
};

// ✅ Handle action create/delete dan hapus folder kosong
const handleAction = (action: 'create' | 'delete') => {
    const folder = path.join('src', 'domains', rawName.toLowerCase());

    if (type === 'resource') {
        for (const t of ['controller', 'service', 'repository', 'validation', 'test']) {
            processFile(action, t, rawName);
        }

        if (action === 'delete') {
            deleteFolderIfEmpty(folder);
        }
    } else if (templates[type]) {
        processFile(action, type, rawName);

        // Optional: delete folder if only one file was deleted
        if (action === 'delete') {
            deleteFolderIfEmpty(folder);
        }
    } else {
        console.error(`❌ Unknown type: ${type}`);
    }
};

// ✅ Detect command based on npm script name
const command = process.env.npm_lifecycle_event;
if (command === 'delete') {
    handleAction('delete');
} else {
    handleAction('create');
}
