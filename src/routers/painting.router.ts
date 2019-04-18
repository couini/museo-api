import { Router } from "express";

import { PaintingController } from "../controllers/painting.controller";

class PaintingRouter {

    router: Router;
    paintingController: PaintingController;

    constructor() {
        this.router = Router();
        this.paintingController = new PaintingController();
        this.routes();
    }

    routes() {
        this.router.get('/', this.paintingController.findAllPaintings);
    }
}

const paintingRouter = new PaintingRouter();
paintingRouter.routes();

export default paintingRouter.router;