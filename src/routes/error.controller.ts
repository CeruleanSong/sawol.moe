// Import only what we need from express
import { Request, Response, Router } from "express";

const router: Router = Router();

router.post("/", async (req: Request, res: Response) => {

});

// Export the express.Router() instance to be used by server.ts
export const CssController: Router = router;