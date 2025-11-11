up: ## Start all services
	docker compose up -d --build


logs: ## Tail logs
docker compose logs -f --tail=100


stop: ## Stop containers (keep volumes)
docker compose stop


down: ## Stop and remove containers
	docker compose down


clean: ## Remove containers and volumes (DB will reset!)
docker compose down -v


backend-shell:
docker compose exec backend sh


frontend-shell:
docker compose exec frontend sh


ps:
docker compose ps