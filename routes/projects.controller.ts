// Import only what we need from express
import { Request, Response, Router } from "express";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
	res.render('projects');
});

// Export the express.Router() instance to be used by server.ts
export const ProjectsController: Router = router;