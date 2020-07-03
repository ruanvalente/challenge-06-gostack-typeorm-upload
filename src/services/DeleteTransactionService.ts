import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRepository = getCustomRepository(TransactionsRepository);
    const transactionID = await transactionRepository.findOne({
      id,
    });

    if (!transactionID) {
      throw new AppError('Transaction does not exist');
    }
    await transactionRepository.remove(transactionID);
  }
}

export default DeleteTransactionService;
