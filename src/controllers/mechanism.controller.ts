import { type NextFunction, type Request, type Response } from "express";
import { MechanismService } from "../services/mechanism.service";

export const MechanismController = {
  async borrow(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const currentQty = await MechanismService.borrow(id);
      res.status(200).json({
        status: "success",
        message: "Successfully borrowed book",
        data: { currentQty },
      });
    } catch (error) {
      const { message } = error as Error;
      res.status(400).json({
        status: "error",
        message,
        data: {},
      });
    }
  },

  async returnBook(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const currentQty = await MechanismService.returnBook(id);
      res.status(200).json({
        status: "success",
        message: "Successfully returned book",
        data: { currentQty },
      });
    } catch (error) {
      const { message } = error as Error;
      res.status(400).json({
        status: "error",
        message,
        data: {},
      });
    }
  },
};
