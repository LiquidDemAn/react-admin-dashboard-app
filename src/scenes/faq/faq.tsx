import { PageContainer } from '../../global.styled';
import { Header } from '../../components/header';
import { FaqAccordion } from '../../components/faq-accordion';

export const Faq = () => {  
	return (
		<PageContainer>
			<Header title='faq' subtitle='Frequently Asked Questions Page' />

			<FaqAccordion title='An Important question'>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
				ipsam, amet, totam ipsum ex earum minima quod temporibus magni veritatis
				doloribus saepe, quos quae laboriosam soluta laborum. Amet, neque
				commodi?
			</FaqAccordion>

			<FaqAccordion title='Another Important question'>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
				ipsam, amet, totam ipsum ex earum minima quod temporibus magni veritatis
				doloribus saepe, quos quae laboriosam soluta laborum. Amet, neque
				commodi?
			</FaqAccordion>

			<FaqAccordion title='Your Favorite question'>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
				ipsam, amet, totam ipsum ex earum minima quod temporibus magni veritatis
				doloribus saepe, quos quae laboriosam soluta laborum. Amet, neque
				commodi?
			</FaqAccordion>

			<FaqAccordion title='Some Random question'>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
				ipsam, amet, totam ipsum ex earum minima quod temporibus magni veritatis
				doloribus saepe, quos quae laboriosam soluta laborum. Amet, neque
				commodi?
			</FaqAccordion>

			<FaqAccordion title='Final question'>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
				ipsam, amet, totam ipsum ex earum minima quod temporibus magni veritatis
				doloribus saepe, quos quae laboriosam soluta laborum. Amet, neque
				commodi?
			</FaqAccordion>
		</PageContainer>
	);
};
