import { Box, Typography } from '@mui/material';
import { mockTransactions } from '../../../../data/mock-data';
import { ColorsObjectType } from '../../../../theme/colors';
import {
	Container,
	Header,
	Transaction,
	TransactionCost,
} from './transactions.styled';

type Props = {
	colors: ColorsObjectType;
};

export const DashboardTransactions = ({ colors }: Props) => {
	return (
		<Container backgroundColor={colors.primary[400]}>
			<Header colors={colors}>
				<Typography variant='h5' color={colors.grey[100]}>
					Recent Transactions
				</Typography>
			</Header>

			{mockTransactions.map((transaction, index) => (
				<Transaction
					borderColor={colors.primary[500]}
					key={`${transaction.txId}-${index}`}
				>
					<Box>
						<Typography variant='h5' color={colors.greenAccent[500]}>
							{transaction.txId}
						</Typography>

						<Typography color={colors.grey[100]}>{transaction.user}</Typography>
					</Box>

					<Box>
						<Typography color={colors.grey[100]}>{transaction.date}</Typography>
						<TransactionCost backgroundColor={colors.greenAccent[500]}>
							${transaction.cost}
						</TransactionCost>
					</Box>
				</Transaction>
			))}
		</Container>
	);
};
